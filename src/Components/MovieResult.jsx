import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MoviePopularity from './MoviePopularity';

const MovieResult = (props) => {
  const movie = props.movieData;
  const userScore = movie.vote_average.toString().split(".").join("")+"%";
  const userScoreCheck = movie.vote_average === 0 ? "New" : userScore;
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const scoreColourCheck = (score) => {
    const scoreW = score.slice(0, -1);
    let answer;
    switch ( true ) {
      case scoreW === "New":
        answer = "green";
        break;
      case scoreW >= 0 && scoreW <= 33:
      answer = "red";
      break;
      case scoreW >= 34 && scoreW <= 66:
      answer = "purple";
      break;
      case scoreW >= 67 && scoreW <= 100:
      answer = "green";
      break;
      default:
      answer = "red";
      break
    }
      return answer;
    } 

  const releaseDate = (date) => {
    let month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const mDate = month[new Date(date).getUTCMonth()];
    const yDate = new Date(date).getUTCFullYear();
    return mDate + " " + yDate;
  }

    return (
      <Fragment>
        <Link to={`/${movie.id}`}>
          <div className="movie-result-container">
            <MoviePopularity rating={ userScoreCheck } colour={ scoreColourCheck(userScore) } />
            <img className= "movie-poster" alt="movie-poster" src={ imgUrl + movie.poster_path }></img>
            <div className="movie-title">{ movie.title }</div>
            <div className="movie-release-date">{ releaseDate(movie.release_date) }</div>
          </div>
        </Link>
      </Fragment>
    );
};

export default MovieResult;

