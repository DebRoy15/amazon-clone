import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://amazon-clone-application.herokuapp.com/",
});

export default instance;

//http://localhost:5001/clone-4287a/us-central1/api
