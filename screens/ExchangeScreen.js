import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from '../config';
import 'firebase/firestore'

export default class ExchangeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    addItem = async(name, description)=>{
        firebase.firestore().collection("requests").add({
            name: name,
            description: description
        }).then(()=>{
            Alert.alert("Item with name: "+name+" added");
            this.setState({
                name: '',
                description: ''
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MyHeader title="Add Item" navigation={this.props.navigation}/>
                <TextInput
                    style={styles.input}
                    placeholder="Item name"
                    value={this.state.name}
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        })
                    }}
                />
                <TextInput
                    style={styles.multiline}
                    placeholder="Add Description"
                    value={this.state.description}
                    onChangeText={(text) => {
                        this.setState({
                            description: text
                        })
                    }}
                    multiline
                />
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.addItem(this.state.name, this.state.description);
                }}>
                    <Text style={styles.text}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
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
        alignSelf: 'center',
        marginTop: 100
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
        backgroundColor: '#3498db',
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#fff'
    }
})