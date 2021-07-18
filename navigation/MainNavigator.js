import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabIcon from '../components/TabIcon';
//Screens
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Trade from '../screens/Trade';
import Market from '../screens/Market';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Portfolio" component={Portfolio} />
//       <Stack.Screen name="Trade" component={Trade} />
//       <Stack.Screen name="Market" component={Market} />
//       <Stack.Screen name="Profile" component={Profile} />
//     </Stack.Navigator>
//   );
// };

const MainNavigator = () => {
  return (
    <Tab.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused}) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused ? 'home' : 'home-outline';
      //     } else if (route.name === 'Portfolio') {
      //       iconName = focused ? 'document' : 'document-outline';
      //     } else if (route.name === 'Trade') {
      //       iconName = focused ? 'swap-vertical' : 'swap-vertical-outline';
      //     } else if (route.name === 'Market') {
      //       iconName = focused ? 'briefcase' : 'briefcase-outline';
      //     } else {
      //       iconName = focused ? 'person' : 'person-outline';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={24} color="blue" />;
      //   },
      // })}
      tabBarOptions={{
        showLabel: false,
        style: {
          //for making tab bar transparent
          height: 100,
          backgroundColor: '#1E1E1E',
          borderTopColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={focused ? 'home' : 'home-outline'}
                label="Home"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={focused ? 'document' : 'document-outline'}
                label="Portfolio"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={focused ? 'swap-vertical' : 'swap-vertical-outline'}
                label="Trade"
                isTrade={true}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={focused ? 'briefcase' : 'briefcase-outline'}
                label="Market"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={focused ? 'person' : 'person-outline'}
                label="Profile"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
