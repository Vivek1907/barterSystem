import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SettingScreen extends React.Component {
  constructor(props){
     super(props);
     this.state = {

     }
  }

  render(){
    return (  
      <View style={styles.container}>
        <MyHeader title="Settings" navigation={this.props.navigation}/>
        <Text>
          SettingScreen
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})