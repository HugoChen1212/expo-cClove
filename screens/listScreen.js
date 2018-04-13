import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import MyCard from '../components/card'



class ListScreen extends Component {


    renderPet(pet, index) {

      let petName = pet.name.$t;
      let petAge = pet.age.$t;
      let petSex = pet.sex.$t;
      let petSize = pet.size.$t;

      let Media = pet.media;
      let petUri = JSON.stringify(Media)!=='{}' ?
         pet.media.photos.photo[2].$t :
        'http://photos.petfinder.com/photos/pets/33754516/1/?bust=1447200763&width=500&-x.jpg'

    return (
      <View key={index}>
        <Card
          title={petName}
          image={{ uri:petUri }}
        >
        <View style={{flexDirection: 'row'}}>
          <Text>Age: {petAge}</Text>
          <Text>Sex: {petSex}</Text>
          <Text>Size: {petSize}</Text>
          </View>
        </Card>
      </View>
      );
  }





  render() {

   let pets = this.props.navigation.state.params.results.pet;
   // console.log(pets);
   //  console.log(pets[1].media.photos.photo[2].$t);


    return (
      <ScrollView>
       <MyCard pets={pets}
        renderPet={this.renderPet}
        />
      </ScrollView>
      )

  }
}

export default ListScreen;