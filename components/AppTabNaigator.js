import * as React from 'react';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen'

const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: <Icon
        name='home'
      />
     }
    },
    ExchangeScreen: {
      screen: ExchangeScreen,
      navigationOptions: {
        tabBarLabel: "Exchange",
        tabBarIcon: <Image
          source={require("../assets/exchange.png")}
          style={{width: 30, height: 30}}
      />
      }
    }
  },
  )

export default AppTabNavigator;