import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import { NotesProps } from '../types';

const RoutesNavigation = () => {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  return (
    <NavigationContainer>
      <AppNavigation notes={notes} setNotes={setNotes} />
    </NavigationContainer>
  );
};

export default RoutesNavigation;
