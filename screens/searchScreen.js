import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SearchScreen extends Component {

constructor(props){
    super(props);
    this.state = {
      size: 'L',
      age: 'Young',
      sex: 'F',
      results: [],
      location: '94131',
    };
}


  render() {
    return (
      <View>
          <Text>Find Nearst Shelter</Text>
          <TextInput placeholder="Enter You Zipcode" />
      </View>
      )
  }
}

export default SearchScreen;