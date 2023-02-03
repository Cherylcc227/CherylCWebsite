import React from "react"
import Masthead from "./Masthead.jsx"
import icons from './icons';
import {Col, Container, Row} from 'react-bootstrap';
// import {ReactComponent as react} from "../images/logos/react.svg";
import react from "../images/logos/react.svg";


const Skills = () => {
  return (
  <div class='Skills, component'>
    <Masthead/>
    <div class='bufferDiv'>
    <div class='bodys'>
      <h1>Skills</h1>
      <Container fluid>
          <Row>
            <Col md="2">
              <img
              className="icon"
              src={icons.react}
              alt="React Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.ajax}
              alt="Ajax Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.aws}
              alt="AWS Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.axios}
              alt="Axios Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.babel}
              alt="Babel Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.bitbucket}
              alt="Bitbucket Logo"/>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <img
              className="icon"
              src={icons.chai}
              alt="Chai Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.csharp}
              alt="C# Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.css}
              alt="CSS Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.dotnet}
              alt="Dotnet Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.enterprisearchitect}
              alt="Enterprise Architect Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.express}
              alt="Express Logo"/>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <img
              className="icon"
              src={icons.figma}
              alt="Figma Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.git}
              alt="Git Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.github}
              alt="Github Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.heroku}
              alt="Heroku Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.html}
              alt="HTML Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.javascript}
              alt="Javascript Logo"/>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <img
              className="icon"
              src={icons.jenkins}
              alt="Jenkins Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.jira}
              alt="Jira Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.jquery}
              alt="Jquery Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.lucidchart}
              alt="Lucidchart Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.mocha}
              alt="Mocha Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.mongodb}
              alt="Mongodb Logo"/>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <img
              className="icon"
              src={icons.mongoose}
              alt="Mongoose Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.mysql}
              alt="MySql Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.neo4j}
              alt="Neo4j Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.node}
              alt="Node Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.npm}
              alt="NPM Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.nunit}
              alt="Nunit Logo"/>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <img
              className="icon"
              src={icons.pgsql}
              alt="Postgres Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.postman}
              alt="Postman Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.python}
              alt="Python Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.sql}
              alt="SQL Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.terraform}
              alt="Terraform Logo"/>
            </Col>
            <Col md="2">
              <img
              className="icon"
              src={icons.vue}
              alt="Vue Logo"/>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
  </div>
  )
}

export default Skills