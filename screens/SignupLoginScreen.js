import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import firebase from '../config';

export default class SignupLoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    signUp = async (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            Alert.alert("You have successfully Signed up!")
        }).catch((error) => {
            console.log(error.toString());
        })
    }

    logIn = async (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            Alert.alert("You have successfully Logged In!")
        }).catch((error) => {
            console.log(error.toString());
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.email}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCorrect={false}
                    onChangeText={(text) => {
                        this.setState({
                            email: text
                        })

                    }
                    }
                    placeholder="Email"
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => {
                        this.setState({
                            password: text
                        })
                    }}
                    placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.signUp(this.state.email, this.state.password);
                    }}
                >
                    <Text style={styles.text}>
                        Sign Up
            </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.logIn(this.state.email, this.state.password);
                    }}
                >
                    <Text style={styles.text}>
                        Login
            </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#beb550',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
         borderWidth: 1,
         width: 250,
         marginVertical: 15,
         padding:10,
         color: '#fff',
         fontSize: 20,
         borderRadius: 10,
        
        },
    button: {
        borderWidth: 1,
        paddingVertical: 15,
        marginVertical: 10,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
    }
})