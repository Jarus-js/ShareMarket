import React from 'react';
import {View, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TabIcon = ({focused, icon, label, isTrade}) => {
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 50,
          padding: 5,
        }}>
        <Ionicons name={icon} size={40} color="#000000" />
        <Text>Trade</Text>
      </View>
    );
  } else {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Ionicons name={icon} size={25} color="#fff" />
        <Text style={{color: '#fff'}}>{label}</Text>
      </View>
    );
  }
};

export default TabIcon;
