import React from 'react';

const MoviePopularity = (props) => {
  console.log(props)
  const { colour, rating } = props;
  return (
    <div className={`${colour}-rating`}>
      <span className="movie-rating" > { rating } </span>
    </div>
  )
}

export default MoviePopularity;