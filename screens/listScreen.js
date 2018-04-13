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
        <View style={styles.row}>
          <Text style={styles.textSize}>Age: {petAge}</Text>
          <Text style={styles.textSize}>Sex: {petSex}</Text>
          <Text style={styles.textSize}>Size: {petSize}</Text>
          </View>
          <View style={styles.row}>
          <Button
            icon={{name: 'zoom-in', type: 'foundation'}}
            backgroundColor='#03A9F4'
            title='Details'
            style={styles.buttonStyle}
          />
          <Button
            icon={{name: 'thumbsup', type: 'octicon'}}
            backgroundColor='#03A9F4'
            title='Like!'
            style={styles.buttonStyle}
          />
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


  const styles = {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    buttonStyle: {
      width: 140,
      height: 80,
      padding: 10,
      marginTop: 5
    },textSize: {
      fontSize: 16
    }
  }

export default ListScreen;