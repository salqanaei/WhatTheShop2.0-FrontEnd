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
      guitarID: this.props.guitar.id
    });
  };

  render() {
    const { guitar } = this.props;
    return (
      <TouchableOpacity onPress={() => this.handlePress()}>
        <Content>
          <Card>
            <CardItem button={true} onPress={this.handlePress}>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
                <Body>
                  <Text style={styles.text}>{guitar.item}</Text>
                  <Text note>{guitar.manufacturer}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: guitar.image }}
                style={{ height: 200, width: null, flex: 1 }}
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
