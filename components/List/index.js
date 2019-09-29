import React, { Component } from "react";
import { observer } from "mobx-react";
import { ImageBackground } from "react-native";

// NativeBase Components
import { List, Content, Spinner, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";
import guitarStore from "../../stores/guitarStore";

// Component
import GuitarItem from "./GuitarItem";
import CartButton from "../Cart/CartButton";

class GuitarList extends Component {
  async componentDidMount() {
    if (authStore.user) {
      await cartStore.fetchCart();
      await cartStore.FetchCartItems();
    }
  }
  render() {
    if (guitarStore.loading) return <Spinner />;
    let guitarList = guitarStore.guitars.map(guitar => (
      <GuitarItem guitar={guitar} key={guitar.id} />
    ));

    return (
      <Content>
        <List>{guitarList}</List>
      </Content>
    );
  }
}
GuitarList.navigationOptions = {
  title: "String Store",
  headerRight: <CartButton />
};

export default observer(GuitarList);
