import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fonts } from "../assets/utils/Fonts";

class Search extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.input}
            placeholder="Lugares cerca de mi"
          />
          <Icon name="search" style={styles.icon} size={24} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ededf7",
    padding: 15
  },
  containerSearch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#ffffff"
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: Fonts.MontSerrat,
    color: "#b1b1b9"
  },
  icon: {
    color: "#b1b1b9"
  }
});

export default Search;