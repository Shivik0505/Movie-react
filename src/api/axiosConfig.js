import axios from "axios";

const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ce7528240b37762fcf8f05ddd0dba1ab",
    language: "en-US",
  },
});

export { tmdbAxios };
