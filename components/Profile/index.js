import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  return (
    <Card>
      <CardItem>
        <Button danger onPress={() => authStore.logout(navigation)}>
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
