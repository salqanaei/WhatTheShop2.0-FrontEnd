import { decorate, observable } from "mobx";
import axios from "axios";

class GuitarStore {
  guitars = [];
  guitar = null;
  loading = true;

  fetchAllGuitars = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/product-list/");
      let guitars = res.data;
      this.guitars = guitars;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  fetchGuitarDetail = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/product-detail/<int:product_id>/"
      );
      let guitars = res.data;
      this.guitars = guitars;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(GuitarStore, {
  guitars: observable,
  guitar: observable,
  loading: observable
});

let guitarStore = new GuitarStore();
guitarStore.fetchAllGuitars();

export default guitarStore;
