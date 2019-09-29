import React, { Component } from "react";
import { observer } from "mobx-react";
import guitarStore from "../../stores/guitarStore";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Sound from "./Sound";

// Style
import styles from "./styles";

// NativeBase Components
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Body,
  Button,
  Icon,
  Center,
  Toast
} from "native-base";
import CartButton from "../Cart/CartButton";

class Details extends Component {
  state = {
    guitar: null,
    product: this.props.navigation.getParam("guitarID"),
    quantity: 1
  };
  async componentDidMount() {
    const guitarID = this.props.navigation.getParam("guitarID");
    await guitarStore.fetchGuitarDetail(guitarID);
    this.setState({ guitar: guitarStore.guitar });
  }

  render() {
    if (!this.state.guitar) return <Text>Loading</Text>;
    console.log(this.state.guitar);

    return (
      <Container style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../WhatTheShop2.0-FrontEnd/string-store-bk.png")}
          style={{
            width: 500,
            height: 800
          }}
        >
          <Content>
            <Card
              style={{
                width: 400,
                height: 350,
                marginLeft: 7,
                borderRadius: 20,
                shadowOpacity: 500,
                shadowColor: "grey",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              }}
            >
              <CardItem
                header
                bordered
                style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
              >
                <Body>
                  <Text style={styles.text}>{this.state.guitar.item}</Text>
                </Body>
                <Text note>{this.state.guitar.manufacturer}</Text>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: this.state.guitar.image }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon type="Entypo" name="price-tag" />
                    <Text>{this.state.guitar.price}</Text>
                  </Button>
                </Left>
                <Right>
                  <Sound
                    guitar={this.state.guitar}
                    key={this.state.guitar.id}
                  />
                </Right>
              </CardItem>
            </Card>
            <Content>
              <Card
                style={{
                  width: 400,
                  marginLeft: 7,
                  borderRadius: 20,
                  shadowOpacity: 500,
                  shadowColor: "grey"
                }}
              >
                <CardItem style={{ borderRadius: 20 }}>
                  <Body>
                    <Text>{this.state.guitar.description}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
            <Content>
              <Card
                style={{
                  width: 400,
                  marginLeft: 7,
                  borderRadius: 20,
                  shadowOpacity: 500,
                  shadowColor: "grey",
                  marginTop: 200
                }}
              >
                <CardItem style={{ borderRadius: 20 }}>
                  <NumericInput
                    value={this.state.value}
                    onChange={value => {
                      this.setState({ quantity: value });
                    }}
                    totalWidth={150}
                    totalHeight={48}
                    iconSize={15}
                    step={1}
                    minValue={1}
                    initValue={1}
                    valueType="real"
                    rounded
                    type="up-down"
                    textColor="#023D7E"
                    iconStyle={{ color: "black" }}
                    rightButtonBackgroundColor="white"
                    leftButtonBackgroundColor="white"
                  />
                  <Button
                    style={{
                      marginLeft: 70,
                      width: 150,
                      height: 48,
                      borderRadius: 7
                    }}
                    iconLeft
                    primary
                    onPress={() => {
                      cartStore.postItemToCart({
                        product: this.state.product,
                        quantity: this.state.quantity
                      });
                      cartStore.addItemToCart({
                        product: this.state.product,
                        quantity: this.state.quantity
                      });
                      Toast.show({
                        text: "Item Added",
                        buttonText: "Okay",
                        position: "bottom",
                        type: "success"
                      });
                    }}
                  >
                    <Icon name="cart-plus" type="FontAwesome" />
                    <Text>Add To Cart</Text>
                  </Button>
                </CardItem>
              </Card>
            </Content>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
Details.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name"),
    headerRight: <CartButton />
  };
};
export default observer(Details);
