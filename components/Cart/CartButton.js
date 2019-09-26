import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text, Badge, View } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = ({ navigation }) => {
  return (
    <View>
      <Button
        dark
        transparent
        onPress={() => {
          if (!authStore.user) {
            navigation.navigate("Login");
          } else {
            navigation.navigate("Cart");
            cartStore.fetchCart();
          }
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 8,
            top: 2,
            width: 15,
            height: 13,
            backgroundColor: "red",
            borderRadius: 15
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 10,
              fontWeight: "bold"
            }}
          >
            {cartStore.quantity}
          </Text>
        </View>
        <Icon name="shoppingcart" type="AntDesign"></Icon>
      </Button>
    </View>
  );
};

export default withNavigation(observer(CartButton));
