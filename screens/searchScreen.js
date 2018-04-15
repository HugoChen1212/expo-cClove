import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-material-dropdown';



class SearchScreen extends Component {

constructor(props){
    super(props);
    this.state = {
      animal: 'dog',
      sex: '',
      location: '',
      format: 'json',
      results: []
    };
}




   dogSearcher =() => {
    axios.get('http://api.petfinder.com/pet.find?key=dbeaf4be86fcf7cfe093d67eef6689b7&animal='+this.state.animal+'&location='+this.state.location+'&sex='+this.state.sex+'&format='+this.state.format).then( response => {
      this.setState({
        results: response.data.petfinder.pets
      }
      //,() => console.log(this.state.results)
      );

      //console.log(response.data.petfinder.pets);
        this.onListHandeler();

     }).catch(error => {
        console.log(error);
     });
  }

 onListHandeler = () => {
    this.props.navigation.navigate('List', {results: this.state.results
    });
  }

  render() {

  let animalData = [{
    value: 'dog',
  }, {
    value: 'cat',
  }, {
    value: 'bird'
  }, {
    value: 'horse'
  },{
    value: 'barnyard'
  },{
    value: 'reptile'
  }
  ];


  let ageData = [{
    value: 'Baby',
  }, {
    value: 'Young',
  }, {
    value: 'Adult'
  }, {
    value: 'Senior'
  }];

  let sexData = [{
    value: 'F',
  }, {
    value: 'M'
  }];


    return (
      <ScrollView>
        <View style={styles.formContainer}>

         <View style={styles.locationContainer}>
          <View style={styles.iconStyle}>
             <Image
              style={{width: 200, height: 200}}
              source={require('../imgs/ccLoveLogo.jpeg')}
            />
          </View>
            <View style={styles.findStyle}>
              <Text style={styles.locationTitle}>Find Nearst Shelter</Text>
              <TextInput textAlign="center"
                  selectionColor="#B8B8C4"
                  animationDuration={5}
                  maxLength={5}
                  style={styles.inputStyle}
                  placeholder="Enter You Zipcode" onChangeText={(location) => this.setState({location})} />
            </View>
          </View>
            <View style={styles.dropdownStyle}>
              <Dropdown
              label='Select Animal'
              data={animalData}
              onChangeText={(value, index, data) => this.setState({animal:value})}
              />
          </View>

          <View style={styles.dropdownStyle}>
             <Dropdown
              label='Select Age'
              data={ageData}
              onChangeText={(value, index, data) => this.setState({age:value})}
              />
          </View>

          <View style={styles.dropdownStyle}>
               <Dropdown
                label='Select Sex'
                data={sexData}
                onChangeText={(value, index, data) => this.setState({sex:value})}
                />
          </View>

            <View style={styles.buttonStyle}>
                <Button title="Submit" color="#74F363" onPress={() => this.dogSearcher()} />
            </View>

            <View style={styles.buttonStyle}>
                <Button title="View Favorites" color="#74F363" onPress={() => Actions.favorites()}/>
            </View>
        </View>

      </ScrollView>
      )
  }
}


const styles = {
  formContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  locationContainer: {
    alignItems: 'center'
  },
  locationTitle: {
    fontSize: 22,
    color: '#BBB193',
    marginBottom:6,
    marginTop: 10
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: '#F3E263',
    marginLeft: '20%',
    marginRight: '20%',
    borderRadius: 5,
    marginTop: '2%'
  },
  iconStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  inputStyle: {
    height: 30,
    borderWidth: 1,
    borderColor: 'gray'
  },
  textStyle: {
    height: 50
  },
  dropdownStyle: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 2
  }
  }

export default SearchScreen;