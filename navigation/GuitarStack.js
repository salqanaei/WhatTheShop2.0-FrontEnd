import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Details from "../components/Details";
import LoginScreen from "../components/Login";

const GuitarStack = createStackNavigator(
  {
    ListScreen: List,
    Login: LoginScreen,
    DetailScreen: Details
  },
  {
    defaultNavigationOptions: {
      title: "Ugly Cake"
    }
  }
);

export default GuitarStack;
