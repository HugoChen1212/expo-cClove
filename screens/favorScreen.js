import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';



class FavorScreen extends Component {


  static navigationOptions = ({navigation}) => {
    return {
    title: 'Favor',
      headerRight:
      <Button
        title="Setting"
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        onPress={() => navigation.navigate('Setting')}
      />
}



}

  render() {
    return (
      <View>
        <Text>FavorScreen</Text>
        <Text>FavorScreen</Text>
      </View>
      )
  }
}

export default FavorScreen;