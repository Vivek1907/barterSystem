import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Modal, ScrollView } from 'react-native';
import firebase from '../config';
import 'firebase/firestore';

export default class SignupLoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isModalVisible: false,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            signUpEmail: '',
            signUpPassword: '',
            confirmPassword: ''
        }
    }

    signUp = async (email, password, firstName, lastName, address, phoneNumber) => {
        console.log(email);
        console.log(password);
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            firebase.firestore().collection('users').add({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                address: address
            }).then(() => {
                Alert.alert("You have successfully Signed up!")
            }).catch((error)=>{
                Alert.alert(error.toString())
            })
        }).catch((error) => {
                Alert.alert(error.toString())
        })
    }

    logIn = async (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            Alert.alert("You have successfully Logged In!")
        }).catch((error) => {
            Alert.alert("Incorrect Email or password")
        })
    }

    showModal = () => {
        return (
            <Modal
                transparent={true}
                visible={this.state.isModalVisible}
                animationType="fade"
                style={styles.modal}
                onRequestClose={()=>{
                    this.setState({
                        isModalVisible: !this.state.isModalVisible
                    })
                }}
            >
                <ScrollView style={styles.container2}>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChangeText={(text) => {
                            this.setState({
                                firstName: text
                            })
                        }}
                        maxLength={10}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        value={this.state.lastName}
                        maxLength={10}
                        onChangeText={(text) => {
                            this.setState({
                                lastName: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={this.state.phoneNumber}
                        onChangeText={(text) => {
                            this.setState({
                                phoneNumber: text
                            })
                        }}
                        maxLength={15}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        style={styles.multiline}
                        placeholder="Address"
                        value={this.state.address}
                        onChangeText={(text) => {
                            this.setState({
                                address: text
                            })
                        }}
                        multiline={true}
                        maxLength={60}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        value={this.state.signUpEmail}
                        onChangeText={(text) => {
                            this.setState({
                                signUpEmail: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={this.state.signUpPassword}
                        onChangeText={(text) => {
                            this.setState({
                                signUpPassword: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        value={this.state.confirmPassword}
                        onChangeText={(text) => {
                            this.setState({
                                confirmPassword: text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (this.state.signUpPassword == this.state.confirmPassword) {
                                this.signUp(this.state.signUpEmail, this.state.signUpPassword, this.state.firstName, this.state.lastName, this.state.address, this.state.phoneNumber);
                            }
                            else {
                                Alert.alert("Please Confirm the password properly")
                            }
                        }}
                    >
                        <Text style={styles.text}>
                            Register
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                isModalVisible: !this.state.isModalVisible
                            })
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.text}>
                            Cancel
                </Text>
                    </TouchableOpacity>
                </ScrollView>
            </Modal>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Barter
                </Text>
                <View>
                    {
                        this.showModal()
                    }
                </View>
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
                    placeholderTextColor="#000000"
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
                    placeholderTextColor="#000000"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.setState({
                            isModalVisible: true
                        })
                    }}
                >
                    <Text style={styles.text}>
                        Register
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
        backgroundColor: '#64d4ed',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderColor: "#000",
        borderWidth: 1,
        width: 250,
        marginVertical: 15,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },
    multiline: {
        borderWidth: 1,
        width: 250,
        marginVertical: 15,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        height: 160,
        alignSelf: 'center',
        textAlignVertical: 'top'
    },
    button: {
        borderWidth: 1,
        paddingVertical: 15,
        marginVertical: 10,
        width: 100,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
    },
    container2: {
        borderRadius: 20,
        backgroundColor: '#fff',
        width: '85%',
        alignSelf: 'center',
        marginVertical: 30,
        borderWidth: 0.5,
        shadowColor: '#000',
        shadowOpacity: 1,
        borderColor: '#000000',
        shadowOffset: {
            x: 20,
            y: 20
        },
        elevation: 16
    },
    modal: {
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        marginBottom: 100,
        marginTop: 0,
        fontSize: 40,
        fontWeight: "100"
    }
})