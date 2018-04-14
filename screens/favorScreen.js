import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';


const SCREEN_WIDTH = Dimensions.get('window').width;

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
      />}
}


  renderLikedPet(){
    console.log(this.props.likes);

      return this.props.likes.map(pet => {

        let petName = pet.name.$t;
        let id = pet.id.$t
        let petAge = pet.age.$t;
        let petSex = pet.sex.$t;
        let petSize = pet.size.$t;
        let Media = pet.media;
        let petUri = JSON.stringify(Media)!=='{}' ?
         pet.media.photos.photo[2].$t :
        'http://photos.petfinder.com/photos/pets/33754516/1/?bust=1447200763&width=500&-x.jpg'

        return(
          <View key={id} style={{ width: SCREEN_WIDTH}}>
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

          </View>

        </Card>
        </View>

          )
      });
  }


  render() {
    // let pet = this.props.navigation.state.params;
    //console.log(this.props.likes[1]);

    console.log(this.props.likes)
    //console.log(this.props.likes[0])
    return (
      <ScrollView>
        {this.renderLikedPet()}
      </ScrollView>
      )
  }
}

const petStateToProps = state => {
  return {
    likes: state.likes
  }
}

// const styles = {
//   italics: {
//     fontStyle: 'italic'
//   },
//   detailWrapper: {
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   }

// }

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
    }
  }

export default connect(petStateToProps)(FavorScreen);