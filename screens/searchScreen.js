import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import axios from 'axios';

class SearchScreen extends Component {

constructor(props){
    super(props);
    this.state = {
      animal: 'dog',
      sex: 'F',
      location: '94124',
      format: 'json'
    };
}


   componentDidMount() {
    axios.get('http://api.petfinder.com/pet.find?key=dbeaf4be86fcf7cfe093d67eef6689b7&animal='+this.state.animal+'&location='+this.state.location+'&sex='+this.state.sex+'&format='+this.state.format).then( response => {
      console.log(response);
     }).catch(error => {
        console.log(error);
     });

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