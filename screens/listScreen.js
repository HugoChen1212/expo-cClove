import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class ListScreen extends Component {

  renderCard(pet) {
    console.log{pet.age}
  }

  eachPet() {
     return this.props.navigation.state.params.results.pet.map( pet =>{
        return this.renderCard(pet);
     });
  }

  render() {

   let pets = this.props.navigation.state.params.results.pet;
    console.log(pets[0].age);

    return (
      <View>
        {this.eachPet()}
      </View>
      )
  }
}

export default ListScreen;