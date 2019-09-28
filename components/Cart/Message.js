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
  Left,
  Icon
} from "native-base";

// Component

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Message extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem
              style={{
                paddingBottom: 100,

                flexDirection: "column"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 20,
                  textAlign: "center"
                }}
              >
                Thank you for your Order
              </Text>
              <Icon
                large
                style={{ color: "black", iconColor: "#2e8b57", bottom: -10 }}
                name="check-square-o"
                type="FontAwesome"
              ></Icon>
            </CardItem>
          </Card>
          <CardItem footer>
            <Right style={{ marginLeft: 50, flexDirection: "row" }}>
              <Button
                bordered
                dark
                onPress={() => {
                  this.props.navigation.navigate("ListScreen");
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: -1
                  }}
                >
                  Home
                </Text>
              </Button>
            </Right>
            <Left style={{ marginLeft: 40, flexDirection: "row" }}>
              <Button
                bordered
                dark
                onPress={() => {
                  this.props.navigation.navigate("Profile");
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 2
                  }}
                >
                  Profile
                </Text>
              </Button>
            </Left>
          </CardItem>
        </Content>
      </Container>
    );
  }
}
export default withNavigation(observer(Message));
