import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card } from 'react-native-elements';

class ListDetailsScreen extends Component {




  render() {
    console.log(this.props.detail)
      let pet = this.props.detail;
      let petName = pet.name.$t;
      let petAge = pet.age.$t;
      let petSex = pet.sex.$t;
      let petSize = pet.size.$t;
      let arrBreed = pet.breeds.breed
      let breed = Array.isArray(arrBreed) ? pet.breeds.breed[0].$t : pet.breeds.breed.$t;
      let description = pet.description.$t;
      let phone = pet.contact.phone.$t;
      let email = pet.contact.email.$t;
      let city = pet.contact.city.$t;
      let state = pet.contact.state.$t;
      let zip = pet.contact.zip.$t;
      let Media = pet.media;
      let petUri = JSON.stringify(Media)!=='{}' ?
         pet.media.photos.photo[3].$t : 'https://ibb.co/iWC3NS'

    return (
           <ScrollView>
             <Card
          title={petName}
          image={{ uri:petUri }}
          imageStyle={styles.imageStyles}
          titleStyle={{fontSize: 23}}
        >
        <View style={styles.row}>
          <Text style={styles.textSize}>Age: {petAge}</Text>
          <Text style={styles.textSize}>Sex: {petSex}</Text>
          <Text style={styles.textSize}>Size: {petSize}</Text>
        </View>
          <Text style={styles.breed}> Breed: {breed}</Text>
          <Text style={styles.titleDescri}>Description: </Text>
          <Text style={styles.contentText}>{description}</Text>
          <Text style={styles.titleDescri}>Contact:</Text>
          <View style={{marginBottom: 10}}>
            <Text style={styles.contentText}>Phone: {phone}</Text>
            <Text style={styles.contentText}>Email: {email}</Text>
            <Text style={styles.contentText}>Address: {city}, {state}, {zip}</Text>
        </View>
        </Card>
          </ScrollView>
      )
  }
}

  const styles = {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5
    },textSize: {
      fontSize: 18
    },imageStyles: {
      height: 350
    },titleDescri: {
      fontWeight: 'bold',
      fontSize: 23,
      marginTop: 10,
      marginBottom: 10
    },contentText: {
      lineHeight: 23,
      fontSize: 18
    },breed:{
      paddingTop: 10,
      paddingBottom: 5,
      marginTop: 5,
      fontSize: 18,
      textAlign: 'center'
    }
  }

const petStateToProps = state => {
  return {
    detail: state.detail
  }
}

export default connect(petStateToProps)(ListDetailsScreen);