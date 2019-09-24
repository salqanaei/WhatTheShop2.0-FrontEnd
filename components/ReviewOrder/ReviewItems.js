import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";

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

class ReviewItems extends Component {
  render() {
    const { review } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text>{review.quantity}</Text>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {" "}
            {review.item}{" "}
          </Text>
          <Text note style={{ marginLeft: 16 }}>
            Price: {review.price}
          </Text>
        </Left>
      </ListItem>
    );
  }
}

export default ReviewItems;
