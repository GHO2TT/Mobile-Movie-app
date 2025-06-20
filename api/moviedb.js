import axios from "axios";

// Get the API key from environment variables
// import { MOVIEDB_API_KEY } from "@env";
import { MOVIEDB_API_KEY } from "../constants";
const apiKey = MOVIEDB_API_KEY;

// Base URL for TMDb
const apiBaseUrl = "https://api.themoviedb.org/3";

// Correct endpoint URLs with proper `?` and `&`
const trendingMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?language=en-US&api_key=${apiKey}`;
const upComingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`;

// Dynamic endpoints
export const movieDetailsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}?language=en-US&api_key=${apiKey}`;
export const movieCreditsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/credits?language=en-US&api_key=${apiKey}`;
export const similarMoviesEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/similar?language=en-US&api_key=${apiKey}`;

// for person details
export const personDetailsEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}?language=en-US&api_key=${apiKey}`;
export const personsimilarMoviesEndpoint = (id) =>
  `${apiBaseUrl}/person/${id}/movie_credits?language=en-US&api_key=${apiKey}`;

// Search Api
// https://api.themoviedb.org/3/search/movie?query=hulk&include_adult=false&language=en-US&page=1
export const searchMovieEndpoint = (query) =>
  `${apiBaseUrl}/search/movie?query=${query}&language=en-US&api_key=${apiKey}`;

// get images of width 500
export const imageBaseUrl500w = (path) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const imageBaseUrl342w = (path) =>
  path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const imageBaseUrl185w = (path) =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

// Axios API call wrapper
const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

// Exported functions to fetch movies
export const getTrendingMovies = async () => {
  const response = await apiCall(trendingMoviesEndPoint);
  return response.results;
};

export const getUpComingMovies = async () => {
  const response = await apiCall(upComingMoviesEndPoint);
  return response.results;
};

export const getTopRatedMovies = async () => {
  const response = await apiCall(topRatedMoviesEndPoint);
  return response.results;
};

// Dynamic endpoints
export const getMovieDetails = async (id) => {
  const response = await apiCall(movieDetailsEndpoint(id));
  return response;
};
export const getMovieCredits = async (id) => {
  const response = await apiCall(movieCreditsEndpoint(id));
  return response;
};
export const getSimilarMovies = async (id) => {
  const response = await apiCall(similarMoviesEndpoint(id));
  return response.results;
};

// Person details

export const getPersonDetails = async (id) => {
  const response = await apiCall(personDetailsEndpoint(id));
  return response;
};
export const getPersonMovies = async (id) => {
  const response = await apiCall(personsimilarMoviesEndpoint(id));
  return response.cast;
};

// Search Movies
export const searchMovies = async (query) => {
  return await apiCall(searchMovieEndpoint(query));
};
