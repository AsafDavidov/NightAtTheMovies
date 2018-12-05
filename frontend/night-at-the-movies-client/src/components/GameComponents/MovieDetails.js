import '../../App.css';
import React from 'react';
import { Box, FormField, TextInput, Button } from 'grommet';
import YouTube from 'react-youtube';


const showHint = (array, movie) => {
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
  };

  return array.map((hint, index) => {
    if (hint === 1) {
      return <p style={{fontFamily: 'Monoton'}} key={index}>CHARACTERS: {movie.character}</p>
    } else if (hint === 2) {
      return <p style={{fontFamily: 'Monoton'}} key={index}>YEAR: {movie.year}</p>
    } else if (hint === 3) {
      return <div><YouTube
        videoId={movie.vid_url.split('=')[1]}
        opts={opts}
      /></div>
    }
  });
} // end showHint

function MovieDetails({movie, answerInput, handleAnswer, handleSubmit, handleHint, selectedHints}) {


  return (
    <React.Fragment>
    <Button className="Hint-1" style={{fontFamily: 'Monoton', backgroundColor: '#be8fd6'}} label="Hint 1" onClick={()=>handleHint(1)}/>
    <Button className="Hint-2" style={{fontFamily: 'Monoton', backgroundColor: '#be8fd6'}} label="Hint 2" onClick={()=>handleHint(2)}/>
    <Button style={{fontFamily: 'Monoton', backgroundColor: '#be8fd6'}} className="Hint-3" label="Hint 3" onClick={()=>handleHint(3)}/>
    {showHint(selectedHints, movie)}
    <h4 style={{fontFamily: 'Bungee Shade'}}>What is the title of the movie this quote belongs to?</h4>
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
