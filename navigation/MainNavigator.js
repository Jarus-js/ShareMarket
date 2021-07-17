import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {Path} from 'react-native-svg';

//Screens
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => {},
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const AboutScreen = ({navigation}) => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerTitle: () => {},
      }}>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
};

const ContactScreen = ({navigation}) => {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerTitle: () => {},
      }}>
      <ContactStack.Screen name="Contact" component={Contact} />
    </ContactStack.Navigator>
  );
};

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  //if particular tabBarButton is selected we return svg else touchableOpacity
  var isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: '#fff'}}></View>
          <Svg width={70} height={60} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill="#fff"
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: '#fff'}}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: '#fff',
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const TabBarNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'call' : 'call-outline';
        } else {
          iconName = focused
            ? 'information-circle'
            : 'information-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color="blue" />;
      },
    })}
    tabBarOptions={{
      showLabel: false,
      style: {
        //for making tab bar transparent
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 0,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarButton: props => <TabBarCustomButton {...props} />,
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        tabBarButton: props => <TabBarCustomButton {...props} />,
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        tabBarButton: props => <TabBarCustomButton {...props} />,
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={TabBarNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
