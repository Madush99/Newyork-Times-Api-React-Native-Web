import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from '../constants/movieConstants';

export const movieListreducer = (state = {movies: []}, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return {loading: true};
    case MOVIE_LIST_SUCCESS:
      return {loading: false, movies: action.payload};
    case MOVIE_LIST_FAIL:
      return {movies: []};
    default:
      return state;
  }
};
