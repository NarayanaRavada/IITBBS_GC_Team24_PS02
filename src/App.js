import { ThemeProvider } from "@mui/material";
import React from "react";
import Disscussion from "./Discussion";
import theme from "./Theme";

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CSS/Style.css"
import DiscussionPage from "./Components/DiscussionPage";
function App() {

  // return (
  //     <Disscussion/>
  // );
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contents">
          <Sidebar />
          <Routes>
            <Route path="/" element={ <DiscussionPage /> }/>
            <Route path="/Hello" element={
              <div className="discussionContainer" >
              Hello
            </div>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
