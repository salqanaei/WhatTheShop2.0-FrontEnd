import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, ListItem, Spinner } from "native-base";

// Component
import ReviewItems from "./ReviewItems";

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Review extends Component {
  async componentDidMount() {
    if (authStore.user) {
      await cartStore.FetchReviewItems();
    }
  }
  render() {
    if (!authStore.user) {
      this.props.navigation.navigate("Login");
    }

    if (!cartStore.loading) {
      reviewItems = cartStore.products.map(item => (
        <ReviewItems review={item} key={item.id} />
      ));
      console.log("review", reviewItems);
      return (
        <>
          <List>{reviewItems}</List>
          <Text style={{ color: "black", fontWeight: "bold", marginLeft: 80 }}>
            Subtotal: KD {cartStore.reviewSubTotal}
          </Text>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}

Review.navigationOptions = {
  title: "Review Order"
};
export default withNavigation(observer(Review));
