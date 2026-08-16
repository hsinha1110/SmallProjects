import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from '../screens/index';
import Routes from './Routes';
import { AppStackParamList } from './types';
import { NotesProps } from '../types';

const Stack = createNativeStackNavigator<AppStackParamList>();

interface AppNavigationProps {
  notes: NotesProps[];
  setNotes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
}

const AppNavigation = ({ notes, setNotes }: AppNavigationProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Home */}
      <Stack.Screen name={Routes.HOME}>
        {props => <Screens.Home {...props} notes={notes} />}
      </Stack.Screen>

      {/* Add Notes */}
      <Stack.Screen name={Routes.ADD_NOTES}>
        {props => (
          <Screens.AddNotes {...props} notes={notes} setNotes={setNotes} />
        )}
      </Stack.Screen>

      {/* Details */}
      <Stack.Screen name={Routes.DETAILS}>
        {props => (
          <Screens.Details {...props} notes={notes} setNotes={setNotes} />
        )}
      </Stack.Screen>

      {/* All Notes */}
      <Stack.Screen name={Routes.ALL_NOTES}>
        {props => (
          <Screens.AllNotes {...props} notes={notes} setNotes={setNotes} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigation;
