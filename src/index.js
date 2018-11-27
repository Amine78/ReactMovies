import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "6d979ec40447497f6a3143bdf49600e6"
ReactDOM.render(<App />, document.querySelector('.container'));
