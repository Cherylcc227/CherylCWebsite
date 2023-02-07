import React, {useEffect} from "react";
//import logo from "./logo.svg";
import AboutMe from "./components/AboutMe.jsx"
import SoftwareEngineeringProjects from "./components/SoftwareEngineeringProjects.jsx"
import VisualArtsProjects from "./components/VisualArtsProjects.jsx"
import LiteraryProjects from "./components/LiteraryProjects.jsx"
import LandingPage from "./components/LandingPage.jsx"
import Skills from "./components/Skills.jsx"
import "./App.css";
import {BrowserRouter, Routes, Route}  from "react-router-dom"
// import Masthead from "./components/Masthead.jsx"
// import { ThemeContext } from "./context.js";

import { createContext } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = React.useState(false)
  // const {theme} = React.useContext(ThemeContext);

  useEffect(() => {

    if (!theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  },[theme])

  console.log("theme", theme)

  return (
    <div className="App">
      {/* <Masthead/> */}
      <BrowserRouter>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="SoftwareEngineeringProjects" element ={<SoftwareEngineeringProjects/>} />
          <Route path="VisualArtsProjects" element ={<VisualArtsProjects/>} />
          {/* <Route path="LiteraryProjects" element ={<LiteraryProjects/>} /> */}
          <Route path="Skills" element ={<Skills/>} />
        </Routes>
      </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;