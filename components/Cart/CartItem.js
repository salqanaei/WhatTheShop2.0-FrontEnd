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

class CartItem extends Component {
  state = {
    quantity: this.props.cart.quantity
  };

  onChange = value => {
    this.setState({ quantity: value });
    cartStore.cartUpdate(this.state, this.props.cart.id, this.props.cart);
  };

  render() {
    const { cart } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <NumericInput
            value={this.state.quantity}
            onChange={value => this.onChange(value)}
            totalWidth={100}
            totalHeight={30}
            iconSize={10}
            step={1}
            minValue={0}
            initialValue={this.props.cart.quantity}
            valueType="real"
            rounded
            textColor="#023D7E"
            iconStyle={{ color: "white" }}
            rightButtonBackgroundColor="steelblue"
            leftButtonBackgroundColor="#FF0000"
          />

          <Text style={{ color: "black", marginLeft: 16 }}> {cart.item} </Text>
          <Text note style={{ marginLeft: 16 }}>
            Price: {cart.price}
          </Text>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() =>
              cartStore.removeItemFromCart(this.props.cart, this.props.cart.id)
            }
          >
            <Icon name="trash" style={{ color: "black", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
