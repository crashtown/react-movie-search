import React, { Fragment, useEffect, useState } from 'react';
import { movieApiUrl, movieQuery, apiKey } from '../config';
import { spinner } from '../spinner';
import axios from 'axios';

const MovieView = (props) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const request = movieApiUrl+movieQuery+props.match.url+"?"+apiKey;
  
  useEffect(() => {
    axios.get(request)
      .then( response => {
        setMovie(
          response.data,
        );
      });
  },[]);

  const timeConvert = (n) => {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + " min";
    }

  const userScoreM = movie.vote_average ? movie.vote_average.toString().split(".").join("")+"%" : 0;
  const releaseYear = movie.release_date ? movie.release_date.substring(0,4) : ""; 
  const userScoreCheckM = movie.vote_average === 0 ? "New" : userScoreM;
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return(
    <Fragment>
      {spinner(loading)}
       <div  onLoad={ () => setLoading(false) } className="movie-container">
          <div className="movie-backdrop-container">
            <div className="movie-back-button-container" onClick={() => props.history.goBack()}>
              <i class="material-icons">arrow_back</i>
            </div>
            <img alt="movie-backdrop" className="movie-backdrop" src={ imgUrl + movie.backdrop_path }></img>
          </div>
          <div className="movie-poster-container">
            <img alt="movie-poster" className="movie-poster" src={ imgUrl + movie.poster_path }></img>
            <div className="movie-upper-details-container">
              <div className="movie-title">
                { movie.title }
              </div>
              <div className="movie-info-container">
                <div className="movie-top-info-container">
                  <span>
                    { releaseYear }
                  </span>
                  <span className="movie-info-separator">
                    .
                  </span>
                  <span>
                    { userScoreCheckM } User Score
                  </span>
                </div>
                <div className="movie-duration">
                  { timeConvert(movie.runtime) }
                </div>
              </div>
            </div>
          </div>
          <div className="movie-overview-container">
            <span>
              <hr />
            </span>
            <p className="movie-overview-title">
              Overview
            </p>
            <p className="movie-overview-text">
              { movie.overview }
            </p>
          </div>
        </div>
    </Fragment>
  );
};

export default MovieView;



