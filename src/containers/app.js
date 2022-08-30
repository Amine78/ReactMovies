import React, { Component } from 'react'
import axios from 'axios';
import _ from 'lodash'
import SearchBar from '../components/search-bar'
import MovieDetail from '../components/movie-detail'
import MovieVideo from '../components/movie-video'
import MovieList from './movie-list'
import VideoList from './video-list';
import VideoDetail from '../components/video-detail'
import { SSL_OP_ALL } from 'constants';
import { bindActionCreators } from 'redux';

const API_END_POINT = "https://api.themoviedb.org/3";
const API_END_POINT_vid = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=6d979ec40447497f6a3143bdf49600e6";
const DEFAULT_TYPE_SEARCH ="tv";
const DEFAULT_PARAM = "language=fr&include_adult=false";
const TV_POPULAR ="/discover/tv?sort_by=popularity.desc&language=fr&append_to_response=images&include_adult=false"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {MovieList:{} , currentMovie:{}}
    }
    componentWillMount(){
        this.initMovies();
    }
    initMovies(){
        axios.get(`${API_END_POINT}${TV_POPULAR}&${API_KEY}`).then(function(response){
            this.setState({MovieList:response.data.results.slice(1,6),currentMovie:response.data.results[0]}, function(){
                this.applyVideoToCurrentMovie();
            });
    }.bind(this));
    }
    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT_vid}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=video&include_adult=false`).then(function(response){
            console.log(response);
            console.log('dede');  
        }.bind(this));
    }
    render(){
        const RenderVideoList = () =>{
            if(this.state.MovieList.length>=5){
                return <VideoList movieList={this.state.MovieList}/>
            }
        }
        return(
            <div>
               <SearchBar/>
                {RenderVideoList()}
               <VideoDetail title={this.state.currentMovie.original_name} description={this.state.currentMovie.overview}/>
            </div>
        )
    }

}

export default App

