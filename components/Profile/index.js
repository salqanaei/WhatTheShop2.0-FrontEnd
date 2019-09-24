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
  ListItem
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
    console.log("PROFILE", profileStore.profile[0].past_orders);
    if (profileStore.profile[0].past_orders.length > 0) {
      cartItems = profileStore.profile[0].past_orders.map(pastOrder => (
        <>
          <Text>Order</Text>
          <List>
            {pastOrder.cart_items.map(item => (
              <PastOrderItems key={item.id} pastOrderItem={item} />
            ))}
          </List>
        </>
      ));
    } else {
      cartItems = <Text>You have no previous orders.</Text>;
      console.log("Empty cart", cartItems);
    }
    return (
      <>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}>
          {profileStore.profile[0].user.first_name}{" "}
          {profileStore.profile[0].user.last_name}
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
