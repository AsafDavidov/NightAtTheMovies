import React from 'react';
// import {Grid, Image} from 'semantic-ui-react';

function Movie({movie, handleSelectMovie}) {
  return (
    <div className="movie-quote-div" onClick={()=> handleSelectMovie(movie.id)}>
      <h4 className="movie-quote">{movie.content.length > 500 ? movie.content.substring(0, 500)+'...' : movie.content}</h4>
    </div>
  )
}


export default Movie;
