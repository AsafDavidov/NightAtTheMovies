import React from 'react';
import {Grid, Image} from 'semantic-ui-react';

function Movie({movie}) {
  return (
    <Grid.Column className="film">
    <Image src={movie.image_thumb_url} rounded fluid/>
    </Grid.Column>
  )
}

export default Movie;
