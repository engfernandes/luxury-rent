import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/index';
import {colors} from './Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Car from './screens/car';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: `${colors.lightGray}`,
            borderColor: `${colors.lightGray}`,
            elevation: 0,
          },
          tabBarActiveTintColor: `${colors.primaryColor}`,
          tabBarInactiveTintColor: `${colors.gray}`,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}: any) => (
              <Icon name="home-filled" size={32} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Discovery"
          component={Home}
          options={{
            tabBarIcon: ({color}: any) => (
              <Icon name="explore" size={32} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({color}: any) => (
              <Icon name="person" size={32} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Stack.Screen name="Car" component={Car} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
