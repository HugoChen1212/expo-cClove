import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import MyCard from '../components/card'
import { connect } from 'react-redux';


class ListScreen extends Component {

  // favorHandeler = (pet) => {
  //     console.log(pet);
  //     this.props.likes.push(pet);

  //   this.props.navigation.navigate('Favor');
  // }



    renderPet(pet, index, detailsHandeler, likes, navigate, detail) {

      let petName = pet.name.$t;
      let petAge = pet.age.$t;
      let petSex = pet.sex.$t;
      let petSize = pet.size.$t;

      let Media = pet.media;
      let petUri = JSON.stringify(Media)!=='{}' ?
         pet.media.photos.photo[3].$t :
        'http://photos.petfinder.com/photos/pets/33754516/1/?bust=1447200763&width=500&-x.jpg'

        favorHandeler = () => {
         // console.log(pet);
          likes.push(pet);
          console.log(likes);
          navigate.navigate('Favor');
        }


      detailsHandeler = () => {
          console.log(pet);
        navigate.navigate('ListDetails');
        }

    return (
      <View key={index}>
        <Card
          title={petName}
          image={{ uri:petUri }}
          imageStyle={styles.imageStyles}
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
            onPress={detailsHandeler}
          />
          <Button
            icon={{name: 'thumbsup', type: 'octicon'}}
            backgroundColor='#03A9F4'
            title='Like!'
            style={styles.buttonStyle}
            onPress={favorHandeler}
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
        detailsHandeler={this.detailsHandeler}
        likes={this.props.likes}
        navigate={this.props.navigation}
        detail={this.props.detail}
        />
      </ScrollView>
      )

  }
}


  const styles = {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5
    },
    buttonStyle: {
      width: 140,
      height: 80,
      padding: 10,
      marginTop: 5
    },textSize: {
      fontSize: 16
    },imageStyles: {
      height: 350
    }
  }

  const petStateToProps = state => {
  return {
    likes: state.likes,
    detail: state.detail
  }
}

export default connect(petStateToProps)(ListScreen);