import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import MyCard from '../components/card'
import { connect } from 'react-redux';


class ListScreen extends Component {


    renderPet(pet, index, detailsHandeler, onLikePet, navigate, detail) {

      let petName = pet.name.$t;
      let petAge = pet.age.$t;
      let petSex = pet.sex.$t;
      let petSize = pet.size.$t;

      let Media = pet.media;
      let petUri = JSON.stringify(Media)!=='{}' ?
         pet.media.photos.photo[3].$t : 'http://www.enxmag.com/twii/wp-content/uploads/2014/11/question-marks22.jpg'

         //'http://photos.petfinder.com/photos/pets/33754516/1/?bust=1447200763&width=500&-x.jpg'

        favorHandeler = () => {
         onLikePet(pet);
          navigate.navigate('Favor');
        }


      detailsHandeler = () => {
          detail = Object.assign(detail, pet);
          //console.log(detail);
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

    return (
      <ScrollView>
       <MyCard pets={pets}
        renderPet={this.renderPet}
        detailsHandeler={this.detailsHandeler}
        //like={this.props.like}
        navigate={this.props.navigation}
        detail={this.props.detail}
        onLikePet={this.props.onLikePet}
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
    like: state.like,
    detail: state.detail
  }
}

const petDispatchToProps = dispatch => {
    return {
      onLikePet: (pet) => dispatch({type: 'like_pet', pet: pet})
    }
}

export default connect(petStateToProps, petDispatchToProps)(ListScreen);