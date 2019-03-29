import React, { Component} from "react";
import { View, Text, StyleSheet } from "react-native";

class Explore extends Component {

  render() {
    return (
      <View style={styles.scene}>
        <Text>EXPLORE VIEW</Text>
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

export default Explore;