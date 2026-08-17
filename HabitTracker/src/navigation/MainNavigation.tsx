import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from '../screens/index';
import Routes from './Routes';
import { MainStackParamList } from './types';
import { AppNavigationProps } from '../types';
import AddHabits from '../screens/Add/AddHabits';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = ({ habits, setHabits }: AppNavigationProps) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom Navigation */}
      <Stack.Screen name={Routes.BOTTOM_NAVIGATION}>
        {props => (
          <Screens.BottomNavigation
            {...props}
            habits={habits}
            setHabits={setHabits}
          />
        )}
      </Stack.Screen>

      {/* Add Habit */}
      <Stack.Screen name={Routes.ADD}>
        {props => (
          <AddHabits {...props} habits={habits} setHabits={setHabits} />
        )}
      </Stack.Screen>

      <Stack.Screen name={Routes.DETAILS}>
        {props => (
          <Screens.Details {...props} habits={habits} setHabits={setHabits} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;
