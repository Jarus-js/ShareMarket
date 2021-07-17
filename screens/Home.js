import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  const name = 'Jarus';
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{color: 'red'}}>Home</Text>
        <Button
          title="About"
          onPress={() =>
            navigation.navigate('About', {
              screen: 'About',
              params: {userName: name},
            })
          }
        />
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

export default Home;
