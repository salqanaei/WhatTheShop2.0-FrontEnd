import { createStackNavigator } from "react-navigation-stack";

// Components
import List from "../components/List";
import Details from "../components/Details";

const GuitarStack = createStackNavigator(
  {
    ListScreen: List,
    DetailScreen: Details
  },
  {
    defaultNavigationOptions: {
      title: "Ugly Cake"
    }
  }
);

export default GuitarStack;
