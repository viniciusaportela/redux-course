import axios from "axios";

const API_ENDPOINT = `https://api.omdbapi.com/?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (movieName) => {
  return axios.get(`${API_ENDPOINT}&s=${movieName}`);
};

export const fetchMovie = async (movieId) => {
  return axios.get(`${API_ENDPOINT}&i=${movieId}`);
};
