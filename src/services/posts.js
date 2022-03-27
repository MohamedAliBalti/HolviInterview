import axios from "axios";

const baseURL = "http://localhost:5555/api";
export default axios.create({
  baseURL: baseURL,
});

