import React, { Fragment, useState, useEffect } from 'react';
import MovieSearch from './MovieSearch';
import MovieResult from './MovieResult';
import axios from 'axios'
const movieApiUrl = "https://api.themoviedb.org/3"
const apiKey = "&api_key=6ed12e064b90ae1290fa326ce9e790ff"
const defaultMoviesQuery = "/discover/movie?sort_by=popularity.desc"

const MoviesContainer = () => {
  const [defaultMovies, setdefaultMovies] = useState([]);
  useEffect(() => {
    axios.get(movieApiUrl+defaultMoviesQuery+apiKey)
      .then( response => {
        setdefaultMovies(
           response.data.results
        )
      });
  },[]);
    return (
      <Fragment>
        <p>Welcome to the movie search engine!</p>
        <MovieSearch />
        { defaultMovies.map( movie => (
          <MovieResult movieData={ movie } />
          ))};
      </Fragment>
    );
}

export default MoviesContainer;


