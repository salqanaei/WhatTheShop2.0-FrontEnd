import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
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
import cartStore from "../../stores/cartStore";

class ReviewItems extends Component {
  render() {
    const { review } = this.props;
    return (
      <View>
        <Card>
          <CardItem
            style={{
              paddingBottom: 50,
              width: 400
            }}
          >
            <Left>
              <Text
                style={{
                  bottom: -25,
                  fontSize: 19
                }}
              >
                {review.quantity}x
              </Text>

              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 70,
                  bottom: -25,
                  fontSize: 19
                }}
              >
                {review.item}
              </Text>
            </Left>
            <Right>
              <Text style={{ marginLeft: 40, bottom: -25, fontSize: 16 }}>
                Price: {review.price} KD
              </Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default ReviewItems;
