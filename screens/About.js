import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = ({route}) => {
  const {userName} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>{userName ? `My Name is ${userName}` : 'Name'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
