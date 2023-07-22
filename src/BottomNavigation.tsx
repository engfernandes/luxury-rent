import React from 'react';
import Home from './screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Car from './screens/Car';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Car" component={Car} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
