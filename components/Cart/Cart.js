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
import CartButton from "./CartButton";

class Cart extends Component {
  async componentDidMount() {
    if (authStore.user) {
      await cartStore.fetchCart();
    }
  }
  render() {
    if (!authStore.user) {
      this.props.navigation.navigate("Login");
    }

    if (!cartStore.loading) {
      cartItems = cartStore.items.map(item => (
        <CartItem cart={item} key={item.item} />
      ));

      return (
        <>
          <List>
            {cartItems}
            <Text
              style={{ color: "black", fontWeight: "bold", marginLeft: 175 }}
            >
              Subtotal: KD {cartStore.subTotal}
            </Text>
            <Button
              rounded
              danger
              onPress={() => cartStore.checkoutCart(this.props.navigation)}
            >
              <Text style={{ fontWeight: "bold", marginLeft: 150 }}>
                Checkout
              </Text>
            </Button>
          </List>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}
Cart.navigationOptions = {
  title: "Your Cart"
};
export default withNavigation(observer(Cart));
