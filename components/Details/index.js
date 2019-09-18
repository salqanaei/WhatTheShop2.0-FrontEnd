import React, { Component } from "react";
import { observer } from "mobx-react";
import guitarStore from "../../stores/guitarStore";

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
  render() {
    const { navigation } = this.props;
    //const navigation = this.props.navigation
    const { guitars } = guitarStore;
    // const cafes = coffeeStore.cafes;
    if (!guitars) return <Content />;
    const guitarID = navigation.getParam("guitarID");
    const guitar = guitars.find(guitar => guitar.id === guitarID);
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.text}>{guitar.item}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: guitar.image }}
                style={{ height: 250, width: null, flex: 1 }}
              />
            </CardItem>

            <CardItem>
              <Left>
                <Button>
                  <Text>KD: {guitar.price}</Text>
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
