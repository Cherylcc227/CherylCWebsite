import React from "react"
// import {Link}  from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Masthead from "./Masthead.jsx"

const LandingPage = () => {
  const qualities = ['creative creature', 'cosplayer', 'artist', 'dog mama', 'food enthusiast', 'avid learner', 'prop designer']

  const [quality, setQuality] = React.useState("");

  const shuffle = React.useCallback(() => {
      const index = Math.floor(Math.random() * qualities.length);
      setQuality(qualities[index]);
  }, []);

  React.useEffect(() => {
      const intervalID = setInterval(shuffle, 1500);
      return () => clearInterval(intervalID);
  }, [shuffle])

  return(
    <div class="LandingPage">
      <Masthead/>
      <div class='body'>
        <h1>Hello there! I'm Cheryl, software engineer and {quality}.</h1>
      </div>
    </div>
  )
}


export default LandingPage