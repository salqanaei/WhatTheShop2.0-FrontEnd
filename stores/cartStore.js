import { decorate, observable, computed } from "mobx";
import axios from "axios";

class CartStore {
  items = [];
  cart = null;
  loading = true;

  fetchCart = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/cart/");
      this.cart = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  loading: observable,
  quantity: computed
});

export default new CartStore();
