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
  Content,
  List
} from "native-base";

const PastOrderItems = ({ pastOrderItem }) => {
  //   const pastOrderItems = cartItems.map(pastOrderItem => {
  console.log("[PastOrderItems.js]: ", pastOrderItem);
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "black", marginLeft: 16 }}>
          {pastOrderItem.item}
        </Text>
        <Text note style={{ color: "black", marginLeft: 16 }}>
          Quantity: {pastOrderItem.quantity}
        </Text>
        <Text note style={{ marginLeft: 16 }}>
          Price: {pastOrderItem.price}
        </Text>
      </Left>
    </ListItem>
  );
};

export default PastOrderItems;
