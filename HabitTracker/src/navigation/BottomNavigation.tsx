import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Screens from '../screens';
import Routes from './Routes';
import {
  HomeIcon,
  CheckCircleIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import { AppNavigationProps } from '../types';

export type BottomTabParamList = {
  [Routes.HOME]: undefined;
  [Routes.HABITS]: undefined;
  [Routes.PROFILE]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigation = ({ habits, setHabits }: AppNavigationProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#4636B3',
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      >
        {props => (
          <Screens.Home {...props} habits={habits} setHabits={setHabits} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name={Routes.HABITS}
        options={{
          tabBarLabel: 'Habits',
          tabBarIcon: ({ color, size }) => (
            <CheckCircleIcon size={size} color={color} />
          ),
        }}
      >
        {props => (
          <Screens.Habits {...props} habits={habits} setHabits={setHabits} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name={Routes.PROFILE}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <UserIcon size={size} color={color} />
          ),
        }}
      >
        {props => (
          <Screens.Profile {...props} habits={habits} setHabits={setHabits} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigation;
