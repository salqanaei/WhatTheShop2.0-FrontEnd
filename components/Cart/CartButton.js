import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => navigation.navigate("Cart")}>
      <Text style={{ color: "black" }}>{cartStore.quantity}</Text>
      <Icon name="shoppingcart" type="AntDesign" />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
