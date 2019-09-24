import React from "react";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Content
} from "native-base";
import cartStore from "../../stores/cartStore";

const CartItem = ({ cart }) => {
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "black", marginLeft: 16 }}> {cart.item} </Text>
        <Text note style={{ marginLeft: 16 }}>
          Quantity: {cart.quantity}
        </Text>
        <Text note style={{ marginLeft: 16 }}>
          Price: {cart.price}
        </Text>
      </Left>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={{ color: "black", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
