import { View, Text } from 'react-native';
import React, { useState } from 'react';
import MainNavigation from './MainNavigation';
import { HabitProps } from '../types';

const RouteNavigations = () => {
  const [habits, setHabits] = useState<HabitProps[]>([]);
  return <MainNavigation habits={habits} setHabits={setHabits} />;
};

export default RouteNavigations;
