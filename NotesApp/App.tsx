import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { NotesProps } from './src/types';

const RoutesNavigation = () => {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  return (
    <NavigationContainer>
      <AppNavigation notes={notes} setNotes={setNotes} />
    </NavigationContainer>
  );
};

export default RoutesNavigation;
