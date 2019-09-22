import React, { Component } from "react";
import { observer } from "mobx-react";
import guitarStore from "../../stores/guitarStore";
import cartStore from "../../stores/cartStore";

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
  Button
} from "native-base";
import { Image } from "react-native";
class Details extends Component {
  state = {
    guitar: null
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
                <Button
                  onPress={() => cartStore.addItemToCart(this.state.guitar.id)}
                >
                  <Text>KD: {this.state.guitar.price}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default observer(Details);
