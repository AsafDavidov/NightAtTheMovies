import React from 'react';
import { Box, FormField, TextInput, Button } from 'grommet';

function MovieDetails({movie, answerInput, handleAnswer, handleSubmit}) {
  return (
    <React.Fragment>
    <h1>MovieDetails</h1>
    <h2>"{movie.content}"</h2>
    <h4>What is the title of the movie this quote belongs to?</h4>
    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
      <FormField>
        <TextInput
        value={answerInput}
        onChange={handleAnswer}
        />
      </FormField>
      <Button label="Submit" onClick={handleSubmit}/>
    </Box>
    </React.Fragment>
  )
}

export default MovieDetails;
