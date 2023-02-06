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
import { ThemeContext } from "./context.js";

const ThemeChange = (props) => {
  const [theme, setTheme] = React.useState(false)

  return (
    <ThemeContext.Provider value = {{
      theme, setTheme
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

function App() {
  // const {theme} = React.useContext(ThemeContext);

  // React.useEffect = (() => {
  //   if (!theme) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   } else {
  //     document.documentElement.setAttribute('data-theme', 'light');
  //   }
  // },[theme])
//   React.useEffect (() => {
//     if (!theme) {
//       document.documentElement.setAttribute('data-theme', 'dark');
//       // setTheme(true);
//     } else {
//       document.documentElement.setAttribute('data-theme', 'light');
//       // setTheme(false);
//     }
// },[theme])

  document.documentElement.setAttribute('data-theme', 'light');

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeChange>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="SoftwareEngineeringProjects" element ={<SoftwareEngineeringProjects/>} />
          <Route path="VisualArtsProjects" element ={<VisualArtsProjects/>} />
          <Route path="LiteraryProjects" element ={<LiteraryProjects/>} />
          <Route path="Skills" element ={<Skills/>} />
        </Routes>
      </ThemeChange>
      </BrowserRouter>
    </div>
  );
}

export default App;