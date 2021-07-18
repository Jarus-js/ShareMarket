import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{color: 'red'}}>Portfolio</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Portfolio;
