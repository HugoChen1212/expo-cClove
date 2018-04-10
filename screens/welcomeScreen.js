import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
import axios from 'axios';


const SLIDE_DATE = [
  {text: 'Welcome to cCLove App', color: '#03A9F4'},
  {text: 'Set your location, then find your pet', color: '#009688'}
];

class WelcomeScreen extends Component {

  onSlidesComplete = () => {
    this.props.navigation.navigate('Auth');
  }

   componentDidMount() {
    axios.get().then( response => {
      console.log(response);
     }).catch(error => {
        console.log(error);
     });

  }


  render() {
    return (
      <Slides data={SLIDE_DATE} onComplete={this.onSlidesComplete} />

      )
  }
}

export default WelcomeScreen;