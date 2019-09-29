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
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Text style={{ color: "black", marginLeft: 16 }}>
        {pastOrderItem.item}
      </Text>
      <Text note style={{ color: "black", marginLeft: 16 }}>
        Quantity: {pastOrderItem.quantity}
      </Text>
      <Text note style={{ marginLeft: 16 }}>
        Price: {pastOrderItem.price}
      </Text>
    </ListItem>
  );
};

export default PastOrderItems;
