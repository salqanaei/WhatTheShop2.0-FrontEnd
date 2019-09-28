import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text, Badge, View } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = ({ navigation }) => {
  return (
    <Button
      large
      transparent
      badge
      onPress={() => {
        if (!authStore.user) {
          navigation.navigate("Login");
        } else {
          navigation.navigate("Cart");
          cartStore.fetchCart();
        }
      }}
    >
      <Badge style={{ left: 25, top: -7 }}>
        <Text>{cartStore.quantity}</Text>
      </Badge>
      <Icon style={{ color: "black" }} name="shoppingcart" type="AntDesign" />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
