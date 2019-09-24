import React, { Component } from "react";
import { observer } from "mobx-react";
import guitarStore from "../../stores/guitarStore";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import { StyleSheet, View, Image } from "react-native";

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
  Center
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
      <Container>
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
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <NumericInput
              value={this.state.value}
              onChange={value => {
                this.setState({ quantity: value });
              }}
              totalWidth={200}
              totalHeight={50}
              iconSize={20}
              step={1}
              minValue={1}
              initValue={1}
              valueType="real"
              rounded
              textColor="#023D7E"
              iconStyle={{ color: "white" }}
              rightButtonBackgroundColor="#023D7E"
              leftButtonBackgroundColor="#7DB3EE"
            />

            <Button
              rounded
              info
              onPress={() =>
                cartStore.addItemToCart(
                  {
                    product: this.state.product,
                    quantity: this.state.quantity
                  },
                  this.props.navigation
                )
              }
            >
              <Text>Add To Cart</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default observer(Details);
