import React, { Component } from 'react';
import { View, Text } from 'react-native';


class MyCard extends Component {

    renderCards() {
      return this.props.pets.map((pet, index) => {
        return this.props.renderPet(pet, index,this.props.favorHandeler);
      });
    }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
      )
  }
}

export default MyCard;

