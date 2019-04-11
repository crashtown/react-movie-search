import React from 'react';

const MovieResult = (props) => {
  const movie = props.movieData;
  console.log(props)
    return (
      <div className="movie-container">
        <p>Movie result</p>
      </div>
    );
};

export default MovieResult;

