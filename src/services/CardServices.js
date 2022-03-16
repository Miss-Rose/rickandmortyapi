import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  get(url) {
    return apiClient.get(url);
  },
};
