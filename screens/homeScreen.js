import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import HomeImgs from '../components/homePage/homeImg.js';
import { MapView } from 'expo';



const SCREEN_WIDTH = Dimensions.get('window').width;


class HomeScreen extends Component {

    searchHandler = () => {
    this.props.navigation.navigate('Search');
  }

  render() {
    return (
      <View style={styles.homeContainer}>

        <Text style={styles.title}>Miss Potato</Text>

        <Image
          style={styles.image}
          source={require('../imgs/potato.jpeg')}
        />
        <View>
        <Text style={styles.subTitel}>Adopt Me Here:</Text>
        <Text style={styles.address}>225 Alabama St, San Francisco, CA 94141</Text>
        <Text style={styles.address}>Phone: (415) 272-4172</Text>
        </View>

        <View style={styles.iconContainer}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../imgs/faves.jpg')}
          />
          <TouchableOpacity onPress={this.searchHandler}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../imgs/search-paw.png')}

          />
          </TouchableOpacity>
          <Image
            style={{width: 60, height: 60}}
            source={require('../imgs/faves.jpg')}
          />
        </View>
        <Text style={styles.clickMe}>Click Here!</Text>
        <Text style={styles.friends}>To meet my other friends ^ ^</Text>
      </View>
      )
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
    homeContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#e8741b',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  image:{
    width: SCREEN_WIDTH,
    height: 300
  },
  subTitel:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10
  },
  address:{
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 10
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderBottomColor: '#e6e6e6',
    //borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
  clickMe:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  friends:{
    fontSize: 15,
    paddingTop: 8,
    paddingLeft: 4,
    paddingBottom: 5,
  }
});