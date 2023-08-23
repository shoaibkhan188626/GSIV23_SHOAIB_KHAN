export const FETCH_MOVIES = "FETCH_MOVIES";
export const SET_MOVIES = "SET_MOVIES";
export const TOTAL_PAGES = "TOTAL_PAGES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const FETCH_MOVIE_CAST = "FETCH_MOVIES_CAST";
export const SET_MOVIE_CAST = "SET_MOVIE_CAST";

export const fetchMovies = (page) => ({
  type: FETCH_MOVIES,
  payload: { page },
});

export const setMovies = (movies, totalPages) => ({
  type: SET_MOVIES,
  payload: movies,
  pages: totalPages,
});

export const searchMovies = (searchQuery, page) => ({
  type: SEARCH_MOVIES,
  payload: { searchQuery, page },
});

export const fetchMoviesCast = (movieId) => ({
  type: FETCH_MOVIE_CAST,
  payload: { movieId },
});

export const setMoviesCast = (movieId, cast, director, formattedRuntime) => ({
  type: SET_MOVIE_CAST,
  payload: { movieId, cast, director, formattedRuntime }, 
});

