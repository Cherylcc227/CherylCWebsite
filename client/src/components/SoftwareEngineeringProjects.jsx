import React from  "react"
import Masthead from "./Masthead.jsx"

const SoftwareEngineeringProjects = () => {
  return (
    <div class="Software component">
      <Masthead/>
      <div class='bufferDiv'>
      <div class='body'>
        <h1 class="Heading">SE PROJECTS</h1>
          <br/>
          <h3> Listed below are public repositories available for viewing.  Professional greenfield projects not publicly available utilized AWS lambdas, AWS API Gateway, .NET, C#, Google Maps API, Javascript, Vue.js, Jquery, Axios, Figma, Lucidchart, Enterprise Architect, Terraform and Jenkins.</h3>
          <br/>
          <p>
            <h3>Pigment Pond</h3>
            <span>
              Personality website featuring local Denver visual/liquid artist, Pigment Pond
              <br/>
              Checkout the github page & website for Pigment Pond here: &nbsp;
              <br/>
              <a href="https://github.com/Cherylcc227/PigmentPond">Pigment Pond</a>
              <br/>
              <a href="https://pigment-pond-a1751004d7fd.herokuapp.com/">Welcome To Pigment Pond</a>
            </span>
          </p>
          <p>
            <h3>Primal Health</h3>
            <span>
              Primal Health is a demo e-commerce site focusing on biodynamically produced meal plan delivery subsciptions with an additional Nutrition and Health education resource.
              <br/>
              Checkout the github page for Primal Health here: &nbsp;
              <a href="https://github.com/Team-Cayenne/Primal-Health">Primal Health</a>
            </span>
          </p>
          <p>
            <h3>Project Catwalk</h3>
            <span>
              Project Catwalk is a demo e-commerce site hosted on a mock database featuring products, suggested products, q&a and reviews sections
              <br/>
              Checkout the github page for Project Catwalk here: &nbsp;
              <a href="https://github.com/Team-Elm-s-FEC-Catwalk/Elm-Catwalk">Elm-Catwalk</a>
            </span>
          </p>
          <p>
            <h3>Undivided Legends</h3>
            <span>
              Undivided legends is a fansite that compiles character information and images from major pop culture (ie. Marvel, DC) through API's
              <br/>
              Checkout the github page for Undivided Legends here: &nbsp;
              <a href="https://github.com/Cherylcc227/Undivided-Legends">Undivided Legends</a>
            </span>
          </p>
          <p>
            <h3>Neo4J Q&A API</h3>
            <span>
              This version of the Q&A database for Project Catwalk is an ETL process of approximately 14 million records from CSV files to a Neo4j cluster.
              <br/>
              Checkout the github page for Neo4J Q&A API here: &nbsp;
              <a href= "https://github.com/Hack-Reactor-SDC-Team-Pesto/Questions-and-Answers-API">Neo4J Q&A Responses API</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SoftwareEngineeringProjects