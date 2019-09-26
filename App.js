import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";
import authStore from "./stores/authStore";
import cartStore from "./stores/cartStore";
import { Root } from "native-base";

export default class App extends React.Component {
  async componentDidMount() {
    await authStore.checkForToken();
    if (authStore.user) {
      await cartStore.FetchCartItems();
    }
  }

  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
