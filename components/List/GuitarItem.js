import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

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
  Body
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
      <ListItem button onPress={this.handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Header>
              <Thumbnail
                bordered
                source={{ uri: guitar.image }}
                style={styles.thumbnail}
              />
            </Header>
            <Header>
              <Text style={styles.text}>{guitar.item}</Text>
            </Header>
            <Text note style={styles.text}>
              {guitar.price}
            </Text>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default withNavigation(GuitarItem);
