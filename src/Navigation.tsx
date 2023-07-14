import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/index';
import {colors} from './Theme';
import HomeIcon from './assets/icons/Home.svg';
import DiscoveryIcon from './assets/icons/Discovery.svg';
import ProfileIcon from './assets/icons/Profile.svg';

const Tab = createBottomTabNavigator();

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
              <HomeIcon fontSize={32} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Discovery"
          component={Home}
          options={{
            tabBarIcon: ({color}: any) => (
              <DiscoveryIcon fontSize={32} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({color}: any) => (
              <ProfileIcon fontSize={32} color={color} />
            ),
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
