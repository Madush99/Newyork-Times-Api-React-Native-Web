import axios from 'axios';
import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from '../constants/movieConstants';

export const listMovies = () => async dispatch => {
  try {
    dispatch({
      type: MOVIE_LIST_REQUEST,
    });

    const {data} = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?&api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY`,
    );

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
