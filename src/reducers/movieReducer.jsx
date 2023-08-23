import { SET_MOVIES, SET_MOVIE_CAST } from "../actions/movieActions";

const initialState = {
  movies: [],
  totalPages: 1,
  cast: [],
  director: null,
  formattedRuntime: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        totalPages: action.pages,
      };
      
    case SET_MOVIE_CAST:
      return {
        ...state,
        cast: action.payload.cast,
        director: action.payload.director,
        formattedRuntime: action.payload.formattedRuntime,
      };

    default:
      return state;
  }
};

export default movieReducer;
