import { decorate, observable } from "mobx";
import axios from "axios";

class ProfileStore {
  profile = null;
  loading = true;

  fetchProfile = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/profile/");
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();

export default profileStore;
