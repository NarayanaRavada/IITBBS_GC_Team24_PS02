import { ThemeProvider } from "@mui/material";
import React from "react";
import Disscussion from "./Discussion";
import theme from "./Theme";

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';


import "./CSS/Style.css"
function App() {
  // return (
  //     <Disscussion/>
  // );
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <Sidebar />
        <div className="discussionContainer" >
          <Disscussion />
          <Disscussion />
          <Disscussion />
          <Disscussion />
        </div>
      </div>
    </div>
  );
}

export default App;
