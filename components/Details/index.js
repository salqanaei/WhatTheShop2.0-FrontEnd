import React, { Component } from "react";
import { observer } from "mobx-react";
import guitarStore from "../../stores/guitarStore";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Sound from "./Sound";

// Style
import styles from "./styles";

// NativeBase Components
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Body,
  Button,
  Center,
  Icon
} from "native-base";

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
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.text}>{this.state.guitar.item}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: this.state.guitar.image }}
                style={{ height: 250, width: null, flex: 1 }}
              />
            </CardItem>

            <CardItem>
              <Left>
                <Text>KD: {this.state.guitar.price}</Text>
              </Left>
            </CardItem>
          </Card>
          <View
            style={{
              flex: 1,
              flexDirection: "column reverse",
              alignItems: "center"
            }}
          >
            <View>
              <Sound guitar={this.state.guitar} key={this.state.guitar.id} />
            </View>
            <View
              style={{
                height: 250,
                width: 300,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
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
                iconLeft
                primary
                onPress={() => {
                  cartStore.addItemToCart({
                    product: this.state.product,
                    quantity: this.state.quantity
                  });
                }}
              >
                <Icon name="cart-plus" type="FontAwesome" />
                <Text>Add To Cart</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default observer(Details);
