import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});
const token = `Bearer ${localStorage.getItem("token")}`;
instance.defaults.headers.common["Authorization"] = token;

export default instance;
