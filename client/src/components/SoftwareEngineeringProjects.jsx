import React from  "react"
import Masthead from "./Masthead.jsx"
//import {Link}  from "react-router-dom";

const SoftwareEngineeringProjects = () => {
  return (
    <div class="Software page">
      <Masthead/>
      <div class='body'>
      <h1>SOFTWARE ENGINEERING PROJECTS PAGE</h1>
      <li>
        <a href="https://github.com/Team-Cayenne/Primal-Health">Primal Health</a>
      </li>
      <li>
        <a href="https://github.com/Team-Elm-s-FEC-Catwalk/Elm-Catwalk">Elm-Catwalk</a>
      </li>
      <li>
        <a href="https://github.com/Cherylcc227/Undivided-Legends">Undivided Legends</a>
      </li>
      <li>
        <a href= "https://github.com/Hack-Reactor-SDC-Team-Pesto/Questions-and-Answers-API">Neo4J Q&A Responses API</a>
      </li>
      </div>
    </div>
  )
}

export default SoftwareEngineeringProjects