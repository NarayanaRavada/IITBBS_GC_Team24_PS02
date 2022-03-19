import React from "react";
import Post from "./Post";
import Disscussion from "./Discussion";

import theme from "./Theme";

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';


import "./CSS/Style.css"
import Content from "./Content";
function App() {
  return (
    <React.Fragment>
      <div></div>
      <Navbar></Navbar>
            <Content/>
    </React.Fragment>
  );
}

export default App;
