import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";
import guitarStore from "../../stores/guitarStore";
import { View } from "react-native";
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
  Input,
  CardItem,
  Card,
  Thumbnail,
  Header,
  Container,
  List
} from "native-base";
import cartStore from "../../stores/cartStore";
import { Circle } from "react-native-maps";

class CartItem extends Component {
  state = {
    quantity: this.props.cart.quantity
  };
  findImage = id => {
    let image = guitarStore.guitars.find(guitar => guitar.id == id);
    return image.image;
  };
  onChange = value => {
    this.setState({ quantity: value });

    if (value == 0) {
      cartStore.removeItemFromCart(this.props.cart, this.props.cart.id);
    } else {
      cartStore.cartAddition(this.state, this.props.cart.id, this.props.cart);
      cartStore.cartUpdateBE(this.state, this.props.cart.id);
    }
  };

  render() {
    const { cart } = this.props;
    return (
      <Card>
        <CardItem
          style={{
            paddingBottom: 85,
            width: 400
          }}
        >
          <Left>
            <Thumbnail
              large
              source={{ uri: this.findImage(this.props.cart.product) }}
              style={{ left: -5, top: 0, position: "absolute" }}
            />
          </Left>
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 30,
              bottom: -55,
              fontSize: 19
            }}
          >
            {cart.item}
          </Text>
          <Text style={{ marginLeft: 13, bottom: -55, fontSize: 16 }}>
            Price: {cart.price} KD
          </Text>
          <Right>
            <Button
              transparent
              onPress={() =>
                cartStore.removeItemFromCart(
                  this.props.cart,
                  this.props.cart.id
                )
              }
              style={{ marginRight: 10, bottom: -55 }}
            >
              <Icon name="trash" style={{ color: "black", fontSize: 25 }} />
            </Button>
          </Right>
        </CardItem>
        <CardItem bordered>
          <Left>
            <Text style={{ marginLeft: -7, fontWeight: "bold" }}>Qty:</Text>
            <View style={{ marginLeft: 10 }}>
              <NumericInput
                value={this.state.quantity}
                onChange={value => this.onChange(value)}
                totalWidth={120}
                totalHeight={40}
                iconSize={20}
                step={1}
                minValue={0}
                initialValue={this.props.cart.quantity}
                valueType="real"
                rounded
                textColor="black"
                rounded={false}
                iconStyle={{ color: "white" }}
                rightButtonBackgroundColor="white"
                leftButtonBackgroundColor="white"
                borderColor="black"
                iconStyle={Circle}
                inputStyle={Circle}
              />
            </View>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default observer(CartItem);
