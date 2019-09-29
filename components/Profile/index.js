import React, { Component } from "react";
import LogoutButton from "./LogoutButton";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Spinner,
  List,
  ListItem,
  Header,
  Body,
  Content,
  Container,
  ImageBackground
} from "native-base";

// Store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { withNavigation } from "react-navigation";
import PastOrderItems from "./PastOrderItems";

class Profile extends Component {
  async componentDidMount() {
    if (authStore.user) {
      await profileStore.fetchProfile();
    }
  }

  render() {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }
    if (profileStore.loading) {
      return <Spinner />;
    }

    let cartItems;

    if (profileStore.profile[0].past_orders.length > 0) {
      cartItems = profileStore.profile[0].past_orders.map(pastOrder => (
        <Container>
          <Content padder>
            <Card style={{ shadowOpacity: 500, shadowColor: "grey" }}>
              <CardItem header bordered>
                <Text style={{ color: "black" }}>Order ID: {pastOrder.id}</Text>
              </CardItem>

              <CardItem bordered>
                <List>
                  {pastOrder.cart_items.map(item => {
                    console.log("ITEM", item);
                    return (
                      <PastOrderItems key={item.id} pastOrderItem={item} />
                    );
                  })}
                </List>
              </CardItem>
              <CardItem footer bordered>
                <Text>Subtotal: {pastOrder.subtotal}</Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      ));
    } else {
      cartItems = <Text>You have no previous orders.</Text>;
    }

    return (
      <>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          {" "}
          Welcome {profileStore.profile[0].user.first_name}{" "}
          {profileStore.profile[0].user.last_name}{" "}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 25, paddingLeft: 120 }}>
          Order History:
        </Text>
        {cartItems}
      </>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile Details",
  headerRight: <LogoutButton />
};
export default withNavigation(observer(Profile));
