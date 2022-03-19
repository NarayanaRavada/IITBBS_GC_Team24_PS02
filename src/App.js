import React from "react";
import Post from "./Post";
import Disscussion from "./Discussion";

import theme from "./Theme";

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CSS/Style.css"
import DiscussionPage from "./Components/DiscussionPage";
import AddDiscussionPage from "./Components/AddDiscussionPage";
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
            <Route path="/AddDiscussion" element={<AddDiscussionPage />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
