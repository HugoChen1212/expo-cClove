import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class ListScreen extends Component {


  render() {

    let data = this.props.navigation.state.params;
    //console.log(data);

    return (
      <View>
        <Text>ListScreen</Text>
        <Text>ListScreen</Text>
        <Text>ListScreen</Text>
      </View>
      )
  }
}

export default ListScreen;