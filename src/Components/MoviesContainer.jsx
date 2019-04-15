import React, { Fragment, useEffect, useState } from 'react';
import { movieApiUrl, movieQuery, searchQuery, popularMoviesQuery, apiKey } from '../config'
import MovieResult from './MovieResult';
import { spinner } from '../spinner';
import logo from '../movie-db.svg';
import axios from 'axios';

const MoviesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [resultType, setResultType] = useState("");

  useEffect(() => {
    axios.get(movieApiUrl+popularMoviesQuery+apiKey)
      .then( response => {
        setMovies(
          response.data.results,
        )
        setResultType(
          "Popular Movies"
        )
        setLoading(
          false
        );
      });
  },[]);

  const searchMovie = (e) => {
    e.preventDefault();
    const movie = document.getElementById("movie-search-bar").value;
    if (movie) {
      setLoading(
        true
      );
      axios.get(movieApiUrl+searchQuery+movieQuery+"?query="+movie+apiKey)
      .then( response => {
        setMovies(
          response.data.results,
        )
        setResultType(
          "Search Results"
        )
      });
    }
  }
  return (
    <Fragment>
      {spinner(loading)}
      <div className="movies-container">
        <div className="hero-container">
          <div className="left-rectangle-container">
            <div className="l-r-1-container">
              <span className="l-r-1" />
            </div>
            <div className="l-r-2-container">
              <span className="l-r-2" />
            </div>
            <div className="l-r-3-container">
              <span className="l-r-3" />
            </div>
          </div>
          <div className="logo-container">
            <img src={logo} alt="movie-db-logo" />
          </div>
          <div className="right-rectangle-container">
            <div className="r-r-1-container">
              <span className="r-r-1" />
            </div>
            <div className="r-r-2-container">
              <span className="r-r-2" />
            </div>
            <div className="r-r-3-container">
              <span className="r-r-3" />
            </div>
          </div>
        </div>
        <div className="movies-search-container">
          <form>
            <input id="movie-search-bar" type="text" placeholder="Search.." />
            <button style={{position: "absolute", left: "-1000px"}} type="submit" onClick={ (e) => searchMovie(e)} />
          </form>
        <div className="movie-search-button-container" onClick={ (e) => searchMovie(e)}>
          <i className="material-icons">search</i>
        </div>
        </div>
        <div onLoad={ () => setLoading(false) } className="movies-results-container">
          <p className="result-type-text">
            { resultType }
          </p>
          <div className="movies-results-inner-container">
            { movies.map(movie => (
              <MovieResult movieData={ movie } />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MoviesContainer;


