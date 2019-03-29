import React, { Component} from "react";
import { View, Text, StyleSheet } from "react-native";

class Queues extends Component {

  render() {
    return (
      <View style={styles.scene}>
        <Text>MY QUEUES VIEW</Text>
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

export default Queues;