import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

// Store
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

const LogoutButton = ({ navigation }) => {
  const handleLogout = () => {
    authStore.logout(navigation);
  };

  if (!authStore.user) {
    navigation.navigate("Login");
  }
  return (
    <Button transparent onPress={handleLogout}>
      <Text>Logout</Text>
    </Button>
  );
};
export default withNavigation(LogoutButton);
