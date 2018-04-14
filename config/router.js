import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Home from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import Favor from '../screens/favorScreen';
import Welcome from '../screens/welcomeScreen';
import Setting from '../screens/settingScreen';
import Auth from '../screens/authScreen';
import List from '../screens/listScreen';
import ListDetails from '../screens/listDetailsScreen'






  export const FavorStack = StackNavigator ({
      Favor: { screen: Favor,
         // navigationOptions:{
         //  title: 'Favor'}
      },

      Setting: {screen: Setting }
  });

  export const HomeStack = StackNavigator ({
    Home: {screen: Home,
      navigationOptions:{
        title: 'Home'}
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
    Welcome: { screen: Welcome},
    Auth: { screen: Auth },
    main: {
      screen: TabNavigator({
        Home: { screen: HomeStack },
        Search: { screen: SearchStack },
        Favor: { screen: FavorStack }
      })
  }
});
