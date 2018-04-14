import React, { Component } from 'react';
import { View, Text } from 'react-native';


class MyCard extends Component {

    renderCards() {
      return this.props.pets.map((pet, index) => {
        return this.props.renderPet(pet, index,this.props.detailsHandeler, this.props.likes, this.props.navigate, this.props.detail);
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

