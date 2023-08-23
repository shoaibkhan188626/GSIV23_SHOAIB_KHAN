import { put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_MOVIES,
  FETCH_MOVIE_CAST,
  SEARCH_MOVIES,
  setMovies,
  setMoviesCast,
} from "../actions/movieActions";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZmMDQzODBlMTM1ZmM1Y2M1MjRjMDI4MGIzZTdhYiIsInN1YiI6IjY0ZGY3Y2M1YWFlYzcxMDNmY2ZkOWYwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vGWeIhkmHSQ1Qv8d6O6c6gWIJEpsp4l04LpMnuS7vnk",
  },
};

const api_key = "1cff04380e135fc5cc524c0280b3e7ab";

function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hoursStr = hours > 0 ? hours + "h" : "";
  const minutesStr = remainingMinutes > 0 ? remainingMinutes + "min" : "";
  return `${hoursStr} ${minutesStr}`;
}

function* fetchMoviesSaga(action) {
  const { page } = action.payload;
  const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;

  try {
    const response = yield axios.get(UPCOMING, options);
    const totalPages = response.data.total_pages;
    yield put(setMovies(response.data.results, totalPages));
  } catch (error) {
    console.error("Error Fetching movies", error);
  }
}

function* searchMoviesSaga(action) {
  const { searchQuery, page } = action.payload;
  const SEARCH = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`;

  try {
    const response = yield axios.get(SEARCH, options);
    yield put(setMovies(response.data.results, response.data.total_pages));
  } catch (error) {
    console.log(error);
  }
}

function* fetchMoviesCast(action) {
  const { movieId } = action.payload;
  const CAST = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const RUN_TIME = `https://api.themoviedb.org/3/movie/${movieId}`;

  try {
    const response = yield axios.get(CAST, options);
    const runTime = yield axios.get(RUN_TIME, options);
    const runtimeInMinutes = runTime.data.runtime;
    const formattedRuntime = convertMinutesToHoursAndMinutes(runtimeInMinutes);
    const cast = response.data.cast;
    const crew = response.data.crew;
    const director = crew.find((member) => member.job === "Director");
    yield put(setMoviesCast(movieId, cast, director, formattedRuntime));
  } catch (error) {
    console.log(error);
  }
}

function* watchfetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesSaga);
  yield takeLatest(SEARCH_MOVIES, searchMoviesSaga);
  yield takeLatest(FETCH_MOVIE_CAST, fetchMoviesCast);
}

export default function* rootSaga() {
  yield all([watchfetchMovies()]);
}
