import * as React from "react";
import { Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
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

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          home: HomeRoute,
          explore: ExploreRoute,
          queues: QueuesRoute,
          profile: ProfileRoute
        })}
        onIndexChange={index => this.setState({ index })}
        tabBarPosition="bottom"
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}

