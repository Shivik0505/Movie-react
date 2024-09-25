import axios from "axios";

const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6da7da777a56e1d453443e220bae91f1",
    language: "en-US",
  },
});

export { tmdbAxios };
