import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";

const LogoutButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => authStore.logout(navigation)}>
      <Text style={{ color: "black" }}>Logout</Text>
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
