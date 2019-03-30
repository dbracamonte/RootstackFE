import React, { Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import { Fonts } from '../assets/utils/Fonts';

const list = [
  {
    title: "Cable Onda",
    subtitle: "Altaplaza Mall - 1.2 Km",
    imgUrl: require("../assets/img/cable-onda.png")
  },
  {
    title: "Cable Onda",
    subtitle: "El dorado - 2.2 Km",
    imgUrl: require("../assets/img/cable-onda.png")
  },
  {
    title: "Cable Wireless",
    subtitle: "El dorado - 2.2 Km",
    imgUrl: require("../assets/img/cable-wireless.png")
  }
];

class Home extends Component {

  render() {
    return (
      <View style={styles.scene}>
        <Search />
        <View style={styles.container}>
          <Text style={styles.title}>Negocios cercanos a ti</Text>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  container: {
    padding: 15
  },
  title: {
    color: "#505676",
    fontFamily: Fonts.MontSerratBold,
    fontSize: 24
  }
});

export default Home;