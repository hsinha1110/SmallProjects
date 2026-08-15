import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from '../screens/index';
import Routes from './Routes';
import { AppStackParamList } from './types';
import { ExpenseProps } from '../types';

interface AppNavigationProps {
  expenses: ExpenseProps[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseProps[]>>;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = ({ expenses, setExpenses }: AppNavigationProps) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME}>
        {props => <Screens.Home {...props} expenses={expenses} />}
      </Stack.Screen>

      <Stack.Screen name={Routes.ADD}>
        {props => (
          <Screens.Add
            {...props}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name={Routes.ALL}>
        {props => <Screens.All {...props} expenses={expenses} />}
      </Stack.Screen>

      <Stack.Screen name={Routes.DETAILS}>
        {props => (
          <Screens.Details
            {...props}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default AppNavigation;
