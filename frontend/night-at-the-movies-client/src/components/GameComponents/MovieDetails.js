import React from 'react';
import { Box, FormField, TextInput, Button } from 'grommet';

const showHint = (array, movie) => {
  console.log('in showHint',array);
  return array.map((hint, index) => {
    if (hint === 1) {
      return <p key={index}>CHARACTER: {movie.character}</p>
    } else if (hint === 2) {
      return <p key={index}>YEAR: {movie.year}</p>
    } else if (hint === 3) {
      return <p key={index}>VIDEO: {movie.vid_url}</p>
    }
  });
}

function MovieDetails({movie, answerInput, handleAnswer, handleSubmit, handleHint, selectedHints}) {
  return (
    <React.Fragment>
    <h1>MovieDetails</h1>
    <Button label="Hint 1" onClick={()=>handleHint(1)}/>
    <Button label="Hint 2" onClick={()=>handleHint(2)}/>
    <Button label="Hint 3" onClick={()=>handleHint(3)}/>
    {showHint(selectedHints, movie)}
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
