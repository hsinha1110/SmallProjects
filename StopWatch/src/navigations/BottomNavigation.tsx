import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Screens from '../screens/index';
import Routes from '../navigations/Routes';
import {BottomTabParamList} from './types';

import {
  ClockIcon,
  ListBulletIcon,
  ArchiveBoxIcon,
} from 'react-native-heroicons/solid';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: true,

        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: '#777777',

        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: '#0D0D0F',
          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      {/* Stopwatch */}
      <Tab.Screen
        name={Routes.STOP_WATCH}
        component={Screens.StopWatch}
        options={{
          tabBarLabel: 'Stopwatch',

          tabBarIcon: ({color, size}) => (
            <ClockIcon
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Laps */}
      <Tab.Screen
        name={Routes.LAPS}
        component={Screens.Laps}
        options={{
          tabBarLabel: 'Laps',

          tabBarIcon: ({color, size}) => (
            <ListBulletIcon
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* History */}
      <Tab.Screen
        name={Routes.HISTORY}
        component={Screens.History}
        options={{
          tabBarLabel: 'History',

          tabBarIcon: ({color, size}) => (
            <ArchiveBoxIcon
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;