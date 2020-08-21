import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beb550',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
