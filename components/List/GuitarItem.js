import React, { Component } from "react";
import { ImageBackground, View, Image, TouchableOpacity } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Header,
  Body,
  Container,
  Content,
  Button,
  Icon
} from "native-base";

// Style
import styles from "./styles";

// Navigation
import { withNavigation } from "react-navigation";

class GuitarItem extends Component {
  handlePress = () => {
    this.props.navigation.navigate("DetailScreen", {
      guitarID: this.props.guitar.id,
      name: this.props.guitar.item
    });
  };

  render() {
    const { guitar } = this.props;
    return (
      <TouchableOpacity onPress={() => this.handlePress()}>
        <Content>
          <Card
            style={{
              width: 400,
              height: 270,
              borderRadius: 20,
              shadowOpacity: 500,
              shadowColor: "grey",
              marginLeft: 7
            }}
          >
            <CardItem
              header
              bordered
              style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
              button={true}
              onPress={this.handlePress}
            >
              <Left>
                <Body>
                  <Text
                    style={{
                      fontFamily: "Verdana",
                      fontWeight: "bold",
                      fontSize: 25
                    }}
                  >
                    {guitar.item}
                  </Text>
                </Body>
                <Text note>{guitar.manufacturer}</Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: guitar.image }}
                style={{ height: 120, width: null, flex: 1 }}
                button={true}
                onPress={this.handlePress}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon type="Entypo" name="price-tag" />
                  <Text>{guitar.price}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(GuitarItem);
