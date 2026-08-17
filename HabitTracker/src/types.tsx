import React from 'react';

export interface HabitProps {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  completed: boolean;
}
export interface AppNavigationProps {
  habits: HabitProps[];
  setHabits: React.Dispatch<React.SetStateAction<HabitProps[]>>;
}
