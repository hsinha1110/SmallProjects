import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ExpenseProps } from './src/types';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  return (
    <NavigationContainer>
      <AppNavigation expenses={expenses} setExpenses={setExpenses} />
    </NavigationContainer>
  );
};

export default App;
