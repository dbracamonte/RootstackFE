import React, { Component} from "react";
import { View, Text, StyleSheet } from "react-native";

class Profile extends Component {

  render() {
    return (
      <View style={styles.scene}>
        <Text>PROFILE VIEW</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Profile;