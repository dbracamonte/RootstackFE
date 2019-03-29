import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../img/cable-onda.png")}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d8dbf7"
  },
  img: {
    width: 80,
    height: 80
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 20,
    color: "#505676"
  },
  subtitle: {
    color: "#9393b9"
  }
});

export default List;
