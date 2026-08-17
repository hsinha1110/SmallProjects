import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteNavigations from './src/navigation/RouteNavigations';

const App = () => {
  return (
    <NavigationContainer>
      <RouteNavigations />
    </NavigationContainer>
  );
};

export default App;
