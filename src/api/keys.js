// exporting keys and value

const api_key = "8ceb2e34e3e03cd15599a037bf0d2a14";
const imageBaseURL = "https://image.tmdb.org/t/p/";

const languageObject = { hi: "Hindi", en: "English", bn: "Bengali" };

const homePageSections = [
  {
    title: "Upcoming Movies",
    path: "/movie/upcoming",
  },
  {
    title: "Weekly Trending Movies",
    path: "/trending/movie/week",
  },
  {
    title: "Top Rated Movies",
    path: "/movie/top_rated",
  },
];

export { api_key, imageBaseURL, languageObject , homePageSections};
