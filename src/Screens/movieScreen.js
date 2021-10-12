import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';
import {listMovies} from '../actions/movieActions';

const MovieScreen = () => {
  const dispatch = useDispatch();

  const movieList = useSelector(state => state.movieList);
  const {loading, error, movies} = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  return <Text>Hello World</Text>;
};

export default MovieScreen;
