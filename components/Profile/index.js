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
    return (
      <Text style={{ fontWeight: "bold", fontSize: 40 }}>
        {profileStore.profile[0].user.first_name}{" "}
        {profileStore.profile[0].user.last_name}
      </Text>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile Details",
  headerRight: <LogoutButton />
};
export default withNavigation(observer(Profile));
