import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzU2ZDRhYmY1ZTYxOWYxZDdhODk2ZmFhMDVlN2FiMCIsIm5iZiI6MTczNjUyNTE1Mi4wMDQ5OTk5LCJzdWIiOiI2NzgxNDU1ZjM0YTRlNzVlNDk3YjU4ZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ggaOIhINfBspQvzoeSUUYS8-FXAXizwTz5BBYx9AQ98';

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: { language: 'en-US' },
  });
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: { language: 'en-US' },
  });
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};