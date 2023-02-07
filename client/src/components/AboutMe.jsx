import React from "react";
import Masthead from "./Masthead.jsx"

const AboutMe = () => {
    return (
      <div className='AboutMe, component'>
        <Masthead/>
        <div className='bufferDiv'>
        <div className="body">
        <h1 className="Heading">ABOUT ME</h1>
        <br/>
        <p className="myIntro">I am a fullstack engineer, curious thinker and boundless dreamer.  Passionate about learning, puzzles, technology and creating, Software Engineering is the perfect profession for me.  Through technology, I channel my passions through applying my skills in designing and creating attractive and fluid UI, building api's, mapping databases and applying data, learning new technologies and building the bridges to connect all these key components together.
        </p>
        </div>
        </div>
      </div>
    )
}

export default AboutMe