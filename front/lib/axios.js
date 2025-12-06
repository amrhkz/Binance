// lib/axios.js
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default axios;
