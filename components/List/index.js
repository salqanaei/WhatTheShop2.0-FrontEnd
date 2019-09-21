import React, { Component } from "react";
import { observer } from "mobx-react";
import LogoutButton from "../LogoutButton";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import guitarStore from "../../stores/guitarStore";

// Component
import GuitarItem from "./GuitarItem";
// import CartButton from "../CartButton";

class GuitarList extends Component {
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
  title: "GuitarHub",
  headerRight: <LogoutButton />
};
export default observer(GuitarList);
