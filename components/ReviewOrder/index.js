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
import ReviewItems from "./ReviewItems";

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Review extends Component {
  async componentDidMount() {
    await cartStore.fetchAddress();
    this.setState({ address: cartStore.address });
  }
  state = {
    address: []
  };
  render() {
    if (!authStore.user) {
      this.props.navigation.navigate("Login");
    }

    if (!cartStore.loading) {
      reviewItems = cartStore.products.map(item => (
        <ReviewItems review={item} key={item.id} />
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
                {reviewItems}
              </CardItem>
              <CardItem bordered>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Total: KD {cartStore.reviewSubTotal}
                </Text>
                <Text style={{ marginLeft: 120 }}>
                  Qty: {cartStore.reviewQuantity}
                </Text>
              </CardItem>
              <Card>
                <CardItem Header>
                  <Text style={{ marginLeft: -7, fontWeight: "bold" }}>
                    {this.state.address.address_type}
                  </Text>
                  <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                    address
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
                      {cartStore.address.complete_address}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <CardItem footer>
                <Right style={{ marginLeft: 50, flexDirection: "row" }}>
                  <Button
                    bordered
                    dark
                    onPress={() => {
                      cartStore.returnToCart(this.props.navigation);
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginLeft: -1
                      }}
                    >
                      Back
                    </Text>
                  </Button>
                </Right>
                <Left style={{ marginLeft: 40, flexDirection: "row" }}>
                  <Button
                    dark
                    onPress={() => {
                      cartStore.placeOrder(this.props.navigation);
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginLeft: 2
                      }}
                    >
                      Place
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

Review.navigationOptions = {
  title: "Review Order",
  headerLeft: null
};
export default withNavigation(observer(Review));
