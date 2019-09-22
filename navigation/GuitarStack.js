import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Details from "../components/Details";
import Cart from "../components/Cart/Cart";
import Login from "../components/Login";

const GuitarStack = createStackNavigator(
  {
    ListScreen: List,
    DetailScreen: Details,
    Cart: Cart,
    Login: Login
  },
  {
    defaultNavigationOptions: {
      title: "Ugly Cake"
    }
  }
);

export default GuitarStack;
