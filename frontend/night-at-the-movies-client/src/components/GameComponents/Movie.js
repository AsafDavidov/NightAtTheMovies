import React from 'react';
// import {Grid, Image} from 'semantic-ui-react';
import { Image } from 'grommet';

function Movie({movie, handleSelectMovie}) {
  return (
    <Image src={movie.image_large_url} width="600px" onClick={()=> handleSelectMovie(movie.id)}/>
  )
}
// function Movie({movie}) {
//   return (
//     <Grid.Column className="film">
//     <Image src={movie.image_thumb_url} rounded fluid/>
//     </Grid.Column>
//   )
// }

export default Movie;
