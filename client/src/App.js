import React from "react";
//import logo from "./logo.svg";
import AboutMe from "./components/AboutMe.jsx"
import SoftwareEngineeringProjects from "./components/SoftwareEngineeringProjects.jsx"
import VisualArtsProjects from "./components/VisualArtsProjects.jsx"
import LiteraryProjects from "./components/LiteraryProjects.jsx"
import LandingPage from "./components/LandingPage.jsx"
import Skills from "./components/Skills.jsx"
import "./App.css";
import {BrowserRouter, Routes, Route}  from "react-router-dom"

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="SoftwareEngineeringProjects" element ={<SoftwareEngineeringProjects/>} />
          <Route path="VisualArtsProjects" element ={<VisualArtsProjects/>} />
          <Route path="LiteraryProjects" element ={<LiteraryProjects/>} />
          <Route path="Skills" element ={<Skills/>} />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header"> Hello from the app
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;