import React from "react"
import Masthead from "./Masthead.jsx"
import icons from './icons';
import {Col, Container, Row} from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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
              <OverlayTrigger
                overlay={(props) => (
                  <Tooltip {...props}>
                    React.js
                  </Tooltip>
                  )}
                placement="bottom"
                >
              <img
              id="icon"
              src={icons.react}
              alt="React Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <OverlayTrigger
                overlay={(props) => (
                  <Tooltip {...props}>
                    Ajax
                  </Tooltip>
                )}
                placement="bottom"
                >
              <img
              id="icon"
              src={icons.ajax}
              alt="Ajax Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <OverlayTrigger
                overlay= {(props) => (
                  <Tooltip {...props}>
                    AWS Cloud
                  </Tooltip>
                )}
                placement = "bottom"
                >
                <img
                id="icon"
                src={icons.aws}
                alt="AWS Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Axios
                  </Tooltip>
                )}
                placement = "bottom"
                >
                <img
                id="icon"
                src={icons.axios}
                alt="Axios Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Babel
                  </Tooltip>
                )}
                placement = "bottom"
                >
                <img
                id="icon"
                src={icons.babel}
                alt="Babel Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <OverlayTrigger
                overlay = {(props => (
                  <Tooltip {...props}>
                    Bitbucket
                  </Tooltip>
                ))}
                placement = "bottom"
                >
                <img
                id="icon"
                src={icons.bitbucket}
                alt="Bitbucket Logo"/>
              </OverlayTrigger>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Chai
                  </Tooltip>
                )}
                placement = "bottom"
              >
                <img
                id="icon"
                src={icons.chai}
                alt="Chai Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    C#
                  </Tooltip>
                )}
                placement = "bottom"
              >
                <img
                id="icon"
                src={icons.csharp}
                alt="C# Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    CSS
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.css}
              alt="CSS Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Dotnet
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.dotnet}
              alt="Dotnet Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Enterprise Architect
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.enterprisearchitect}
              alt="Enterprise Architect Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Express.js
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.express}
              alt="Express Logo"/>
              </OverlayTrigger>
            </Col>
          </Row>

          <Row>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Figma
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.figma}
              alt="Figma Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Git
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.git}
              alt="Git Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Github
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.github}
              alt="Github Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Heroku
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.heroku}
              alt="Heroku Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    HTML
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.html}
              alt="HTML Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Javascript
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.javascript}
              alt="Javascript Logo"/>
              </OverlayTrigger>
            </Col>
          </Row>

          <Row>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Jenkins
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.jenkins}
              alt="Jenkins Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Jira
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.jira}
              alt="Jira Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Jquery
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.jquery}
              alt="Jquery Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Lucidchart
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.lucidchart}
              alt="Lucidchart Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Mocha
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.mocha}
              alt="Mocha Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    MongoDB
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.mongodb}
              alt="Mongodb Logo"/>
              </OverlayTrigger>
            </Col>
          </Row>

          <Row>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    mongoose
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.mongoose}
              alt="Mongoose Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    MySql
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.mysql}
              alt="MySql Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Neo4j
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.neo4j}
              alt="Neo4j Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Node.js
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.node}
              alt="Node Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    NPM
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.npm}
              alt="NPM Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Nunit
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.nunit}
              alt="Nunit Logo"/>
              </OverlayTrigger>
            </Col>
          </Row>

          <Row>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    PostgreSQL
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.pgsql}
              alt="Postgres Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Postman
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.postman}
              alt="Postman Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Python
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.python}
              alt="Python Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    SQL
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.sql}
              alt="SQL Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Terraform
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.terraform}
              alt="Terraform Logo"/>
              </OverlayTrigger>
            </Col>
            <Col md="2">
            <OverlayTrigger
                overlay = {(props) => (
                  <Tooltip {...props}>
                    Vue.js
                  </Tooltip>
                )}
                placement = "bottom"
              >
              <img
              id="icon"
              src={icons.vue}
              alt="Vue Logo"/>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
  </div>
  )
}

export default Skills