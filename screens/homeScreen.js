import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HomeImgs from '../components/homePage/homeImg.js';
import { MapView } from 'expo';

const styles = StyleSheet.create({
    homeContainer: {
    flex: 1
  }
});



class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.homeContainer}>
        <HomeImgs />
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <MapView
        style={{ flex: 2 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </View>
      )
  }
}

export default HomeScreen;


