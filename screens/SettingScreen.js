import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MyHeader from "../components/MyHeader";
import firebase from "../config";
import { Input, Button } from "react-native-elements";

export default class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      docId: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { userId } = this.state;
    console.log(userId);
    const data = await firebase
      .firestore()
      .collection("users")
      .where("email", "==", userId)
      .get()
      .then((data) => {
        data.docs.forEach((doc) => {
          this.setState(doc.data());
          this.setState({
            phone: doc.data().phoneNumber,
            address: doc.data().address,
            docId: doc.id,
          });
        });
      });
  }

  async updateData() {
    const { userId, firstName, lastName, phone, address } = this.state;
    firebase.firestore().collection("users").doc(this.state.docId).update({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phone,
      address: address,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Settings" navigation={this.props.navigation} />
        <Input
          placeholder="Your First Name"
          label="First Name"
          onChangeText={(firstName) => {
            this.setState({ firstName });
          }}
          value={this.state.firstName}
        />
        <Input
          placeholder="Your Last Name"
          label="Last Name"
          onChangeText={(lastName) => {
            this.setState({ lastName });
          }}
          value={this.state.lastName}
        />
        <Input
          placeholder="Contact"
          keyboardType="phone-pad"
          label="Contact"
          maxLength={15}
          onChangeText={(phone) => {
            this.setState({ phone });
          }}
          value={this.state.phone}
        />
        <Input
          label="Address"
          placeholder="Your Address"
          multiline
          style={{ height: 70 }}
          onChangeText={(address) => {
            this.setState({ address });
          }}
          value={this.state.address}
        />
        <Button
          title="Save"
          onPress={() => {
            this.updateData();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
