import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';



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
    // let pet = this.props.navigation.state.params;
    //console.log(this.props.likes[1]);

    console.log(this.props.likes)
    //console.log(this.props.likes[0])
    return (
      <View>
        <Text>FavorScreen</Text>
        <Text>FavorScreen</Text>
      </View>
      )
  }
}

const petStateToProps = state => {
  return {
    likes: state.likes
  }
}

export default connect(petStateToProps)(FavorScreen);