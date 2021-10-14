import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {movieListreducer} from './reducers/movieReducers';
import {userLoginReducer} from './reducers/userReducers';

const reducer = combineReducers({
  movieList: movieListreducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const middleware = [thunk];

const store = createStore(
  reducer,
  userInfoFromStorage,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
