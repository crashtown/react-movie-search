import React, { useState, useEffect } from 'react';
import MovieSearch from './MovieSearch';
import MovieResult from './MovieResult';
import axios from 'axios'
const movieApiUrl = "https://api.themoviedb.org/3"
const apiKey = "&api_key=6ed12e064b90ae1290fa326ce9e790ff"
const defaultMoviesQuery = "/discover/movie?sort_by=popularity.desc"

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [resultType, setResultType] = useState("");

  useEffect(() => {
    axios.get(movieApiUrl+defaultMoviesQuery+apiKey)
      .then( response => {
        setMovies(
          response.data.results,
        )
        setResultType(
          "Popular Movies"
        )
      });
  },[]);
  console.log(movies)
    return (
      <div className="movies-container">
        <div className="movies-search-container">
          <p>Welcome to the movie search engine!</p>
          <MovieSearch />
          <p>{ resultType }</p>
        </div>
        <div className="movies-results-container">
          { movies.map(movie => (
            <MovieResult movieData={ movie } />
          ))};
        </div>
      </div>
    );
}

export default MoviesContainer;


