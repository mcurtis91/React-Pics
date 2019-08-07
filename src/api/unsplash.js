import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 07da1b96cda3f63c11058227c77401136bc8da8e0a24c2bb7994cf0827604ad9"
  }
});
