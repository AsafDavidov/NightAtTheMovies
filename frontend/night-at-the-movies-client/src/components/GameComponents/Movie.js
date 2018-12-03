import React from 'react';
// import {Grid, Image} from 'semantic-ui-react';
import { Image } from 'grommet';

function Movie({movie, handleSelectMovie}) {
  return (
    <div height="400px" onClick={()=> handleSelectMovie(movie.id)}>
      <h4>{movie.content}</h4>
    </div>
  )
}
// <Image src={movie.img_url} height="500px" onClick={()=> handleSelectMovie(movie.id)}/>

// function Movie({movie}) {
//   return (
//     <Grid.Column className="film">
//     <Image src={movie.image_thumb_url} rounded fluid/>
//     </Grid.Column>
//   )
// }

export default Movie;
