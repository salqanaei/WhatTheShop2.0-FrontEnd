import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          onPress={() => authStore.login(this.state, this.props.navigation)}
        >
          <Text>Login</Text>
        </Button>
        <Button
          full
          onPress={() => authStore.register(this.state, this.props.navigation)}
        >
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
