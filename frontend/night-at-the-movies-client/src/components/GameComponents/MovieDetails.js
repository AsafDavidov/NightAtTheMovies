import React from 'react';
import { FormField, TextInput } from 'grommet';

function MovieDetails({movie, answerInput, handleAnswer}) {
  return (
    <React.Fragment>
    <h1>MovieDetails</h1>
    <h2>"{movie.content}"</h2>
    <h4>What is the title of the movie this quote belongs to?</h4>
    <FormField>
      <TextInput
      value={answerInput}
      onChange={handleAnswer}
      />
    </FormField>
    </React.Fragment>
  )
}

export default MovieDetails;
