import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});



const SwitchNavigator = createSwitchNavigator({
  Signup: SignupLoginScreen,
  DrawerNavigator: AppDrawerNavigator
})

const AppContainer = createAppContainer(SwitchNavigator)
