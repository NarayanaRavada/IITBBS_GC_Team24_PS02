import React from "react";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Disscussion from "./Discussion";
import Post from "./Post";

const Content = () => {
  const [opened, setopened] = useState(false);
  const onopen = () => {
    setopened(true);
  };
  const onclose= () => {
      setopened(false);
  }
  if (!opened) return (
      <React.Fragment>
                <div style={{display:"flex",justifyContent:"space-between"}}>
            <Sidebar></Sidebar> 
            <div style={{display:"flex",'flex-direction':"column",marginTop:"100px"}}>    
                <Post onClicked={onopen}></Post>
                <Post onClicked={onopen}></Post>
                <Post onClicked={onopen}></Post>
                <Post onClicked={onopen}></Post>
                <Post onClicked={onopen}></Post>
            </div>
            </div>
      </React.Fragment>
    )
  else return <Disscussion onClicked={onclose}></Disscussion>;
};
export default Content;
