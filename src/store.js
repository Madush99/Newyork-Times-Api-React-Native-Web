import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {create} from 'react-test-renderer';
import {movieListreducer} from './reducers/movieReducers';

const reducer = combineReducers({
  movieList: movieListreducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
