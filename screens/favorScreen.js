import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';


const SCREEN_WIDTH = Dimensions.get('window').width;

class FavorScreen extends Component {
  constructor(props){
    super(props)
  }

  renderLikedPet(){
    console.log(this.props.likes);

      return this.props.likes.map((pet, index) => {
        let petName = pet.name.$t;
        let id = pet.id.$t
        let petAge = pet.age.$t;
        let petSex = pet.sex.$t;
        let petSize = pet.size.$t;
        let Media = pet.media;
        let petUri = JSON.stringify(Media)!=='{}' ?
         pet.media.photos.photo[3].$t :
        'https://ibb.co/iWC3NS'

        detailsHandeler = () => {
          favorDetail = Object.assign(this.props.favorDetail, pet);
         this.props.navigation.navigate('FavorDetail');

        }

        deleteHandeler = () => {
          this.props.onDeletePet(index)
        }

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
                <View style={styles.row}>
                <Button
                icon={{name: 'zoom-in', type: 'foundation'}}
                backgroundColor='#03A9F4'
                title='Details'
                onPress={detailsHandeler}
                />

                 <Button
                icon={{name: 'trash', type: 'foundation'}}
                backgroundColor='#03A9F4'
                title='Delete'
                onPress={deleteHandeler}
                />
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

  const petStateToProps = state => {
  return {
    likes: state.likes,
    favorDetail: state.favorDetail
  }
}


  const deleteDispatchToProps = dispatch => {
    return {
      onDeletePet: (index) => dispatch({type: 'delete_favor', index: index})
    }
}

export default connect(petStateToProps, deleteDispatchToProps)(FavorScreen);