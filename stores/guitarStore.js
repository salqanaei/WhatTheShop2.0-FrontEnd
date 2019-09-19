import { decorate, observable } from "mobx";
import axios from "axios";

class GuitarStore {
  guitars = [];
  guitar = null;
  loading = true;

  fetchAllGuitars = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/product/");
      let guitars = res.data;
      this.guitars = guitars;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  fetchGuitarDetail = async product_id => {
    if (this.guitar) {
      if (this.guitar.id === product_id) {
        return;
      }
    }
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/product/${product_id}/`
      );
      this.guitar = res.data;
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
