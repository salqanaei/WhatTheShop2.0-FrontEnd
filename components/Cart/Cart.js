import React, { Component } from "react";
import { observer } from "mobx-react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  Text,
  List,
  Button,
  ListItem,
  Spinner,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Right,
  Body,
  Left
} from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

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
        <Container>
          <Content>
            <Card>
              <CardItem header></CardItem>
              <CardItem
                cardBody
                style={{
                  paddingBottom: 100,

                  flexDirection: "column"
                }}
              >
                {cartItems}
              </CardItem>
              <CardItem bordered>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Total: KD {cartStore.subTotal}{" "}
                </Text>
                <Text style={{ marginLeft: 120 }}>
                  Qty: {cartStore.quantity}
                </Text>
              </CardItem>
              <CardItem footer>
                <Right style={{ marginLeft: 50, flexDirection: "row" }}>
                  <Button
                    bordered
                    dark
                    onPress={() => {
                      this.props.navigation.navigate("ListScreen");
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginLeft: -1
                      }}
                    >
                      Shop More
                    </Text>
                  </Button>
                </Right>
                <Left style={{ marginLeft: 40, flexDirection: "row" }}>
                  <Button
                    dark
                    onPress={() => {
                      cartStore.checkoutCart(this.props.navigation);
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginLeft: 2
                      }}
                    >
                      Checkout
                    </Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>
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
