import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, ListItem, Spinner } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Cart extends Component {
  componentDidMount() {
    if (authStore.user) {
      cartStore.fetchCart();
    }
  }
  render() {
    if (!authStore.user) {
      this.props.navigation.navigate("Login");
    }

    if (!cartStore.loading) {
      cartItems = cartStore.cart[0].cart_items.map(item => (
        <CartItem cart={item} key={item.product} />
      ));
      return (
        <>
          <List>{cartItems}</List>
          <Text style={{ color: "green", fontWeight: "bold", marginLeft: 35 }}>
            Subtotal: KD {cartStore.cart[0].subtotal}
          </Text>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}
export default withNavigation(observer(Cart));
