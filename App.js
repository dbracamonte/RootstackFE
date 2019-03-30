import * as React from "react";
import { Text, Dimensions, StyleSheet } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "./app/containers/Home";
import Explore from "./app/containers/Explore";
import Queues from "./app/containers/Queues";
import Profile from "./app/containers/Profile";

const HomeRoute = () => <Home />;

const ExploreRoute = () => <Explore />;

const QueuesRoute = () => <Queues />;

const ProfileRoute = () => <Profile />;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home" },
      { key: "explore", title: "Explore" },
      { key: "queues", title: "My Queues" },
      { key: "profile", title: "Profile" }
    ]
  };

  _renderScene = SceneMap({
    home: HomeRoute,
    explore: ExploreRoute,
    queues: QueuesRoute,
    profile: ProfileRoute
  });

  icon = param => {
    switch (param) {
      case "home":
        return "home";
      case "explore":
        return "search";
      case "queues":
        return "view-headline";
      case "profile":
        return "person";
    }
  }

  _renderIcon = ({ route, focused, color }) => (
    <Icon
      name={this.icon(route.key)}
      color={focused ? '#2186eb' : '#9393b9'}
      size={24}
    />
  );

  render() {
    return (
      <TabView
        navigationState={this.state}
        onIndexChange={index => this.setState({ index })}
        tabBarPosition="bottom"
        renderScene={this._renderScene}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderIcon={this._renderIcon}
            renderIndicator={() => null}
            renderLabel={({ route, focused, color }) => (
              <Text style={{ color, textTransform: 'uppercase', fontSize: 11 }}>
                {route.title}
              </Text>
            )}
            activeColor={"#2186eb"}
            inactiveColor={"#9393b9"}
            style={styles.tabBar}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#d8dbf7"
  }
});