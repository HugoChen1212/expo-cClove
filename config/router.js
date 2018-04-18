import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Home from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import Favor from '../screens/favorScreen';
import Welcome from '../screens/welcomeScreen';
import Auth from '../screens/authScreen';
import List from '../screens/listScreen';
import ListDetails from '../screens/listDetailsScreen';
import FavorDetails from '../screens/favorDetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';





  export const FavorStack = StackNavigator ({
      Favor: { screen: Favor,
         // navigationOptions:{
         //  title: 'Favor'}
      },
      FavorDetail: {screen: FavorDetails}
  });

  export const HomeStack = StackNavigator ({
    Home: {screen: Home,
      navigationOptions:{
        title: 'Home',
        headerTintColor: 'black',
        // headerStyle: {backgroundColor: 'rgba(52,52,52,0.8)', color:'white'},
        // headerTitleStyle: {
        //   fontSize: 20
        // }
      }
    }
  });


   export const SearchStack = StackNavigator ({
    Search: {screen: SearchScreen,
      navigationOptions:{
        title: 'Search'}
    },
    List: {screen: List },
    ListDetails: {screen: ListDetails}
  });


  export const MainNavigator = TabNavigator({
    // Welcome: { screen: Welcome},
    // Auth: { screen: Auth },
    // main: {
      // screen: TabNavigator({
        Home: { screen: HomeStack,
          navigationOptions: {
            headerStyle: {backgroundColor: 'black'},
            tabBarIcon: ({tintColor }) => <Icon name="ios-home" size={35} color={tintColor}/>
          }
         },
        Search: { screen: SearchStack,
             navigationOptions: {
            tabBarIcon: ({tintColor }) => <Icon name="ios-search" size={35} color={tintColor}/>
          },
         },
        Favor: { screen: FavorStack,
             navigationOptions: {
            tabBarIcon: ({tintColor }) => <Icon name="ios-heart" size={35} color={tintColor}/>
          },
        }
     // })
  //}
},{
    tabBarOptions: {
      style: {
        padding: 0,

      },
      tabStyle: {
        marginTop: 5,

      },
      labelStyle: {
        fontSize: 14,
        height: 13,
        fontWeight: 'bold'
      }
  }
}
);
