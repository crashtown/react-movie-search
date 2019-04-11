import React from 'react';

const MovieResult = (props) => {
  const movie = props.movieData;
  const userScore = movie.vote_average.toString().split(".").join("")+"%";
  const userScoreCheck = movie.vote_average === 0 ? "New" : userScore;
  const imgUrl = "https://image.tmdb.org/t/p/w500";
    return (
      <div className="movie-container">
        <div className="movie-popularity">{ userScoreCheck }</div>
        <img src={ imgUrl + movie.poster_path }></img>
        <div className="movie-title">{ movie.title }</div>
        <div className="movie-release-date">{ movie.release_date }</div>
      </div>
    );
};

export default MovieResult;

