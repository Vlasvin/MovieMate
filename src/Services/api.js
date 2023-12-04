import axios from 'axios';

export async function fetchTrend() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSearch(value) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCast(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchReview(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7cdf1e3e478f8db80707c45dfe34ab37&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
