import React from "react";
import Post from "./Post";
import Disscussion from "./Discussion";

import theme from "./Theme";

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CSS/Style.css"
import DiscussionPage from "./Components/DiscussionPage";
function App() {
  const topics = {
    "6239EL245FADF":{
      Writer:"Nagasari",
      title:"Who is the PM of India",
      Posttime:Date("20-12-2020"),
      Content:"I was wandering about who is the PM of india. Although I should know this, but i Forgot.",
      Tags:["Hackthon","Development","Thanos"],
      Replies:[
        {
          Writer:"Thanos",
          Content:"Seriously you don't know the PM of India, Shame on you",
          Posttime:new Date(2020,12,20,0,0,0,0),
        },
      ],
    },
    "RPFALKDJ31415":{
      Writer:"Nagasari",
      title:"How to Win a Hackathon",
      Content:"This is the First time I am participating in a Hackthon . Could anyone share any tips to me for proceedin in it.",
      Posttime:new Date(2020,12,20,0,0,0,0),
      Tags:["Hack","Development","Thanos"],
      Replies:[
        {
          Writer:"Thanos",
          Content:"Seriously you don't know the PM of India, Shame on you",
          Posttime:new Date(2020,12,20,0,0,0,0),
          Replies:[
            {
              Writer:"Thanos",
              Content:"Seriously you don't know the PM of India, Shame on you",
              Posttime:new Date(2020,12,20,0,0,0,0),
              Replies:[
                {
                  Writer:"Thanos",
                  Content:"Seriously you don't know the PM of India, Shame on you",
                  Posttime:new Date(2020,12,20,0,0,0,0),
                  Replies:[
                    {
                      Writer:"Thanos",
                      Content:"Seriously you don't know the PM of India, Shame on you",
                      Posttime:new Date(2020,12,20,0,0,0,0),
                      Replies:[
                        {
                          Writer:"Thanos",
                          Content:"Seriously you don't know the PM of India, Shame on you",
                          Posttime:new Date(2020,12,20,0,0,0,0),
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          Writer:"Thanos",
          Content:"Seriously you don't know the PM of India, Shame on you",
          Posttime:new Date(2021,7,20,0,0,0,0),
        },
      ]
    },
  };

  return (
    <Disscussion Topic={topics["RPFALKDJ31415"]}></Disscussion>
  );
  // return (
  //   <Router>
  //     <div className="App">
  //       <Navbar />
  //       <div className="contents">
  //         <Sidebar />
  //         <Routes>
  //           <Route path="/" element={ <DiscussionPage /> }/>
  //           <Route path="/Hello" element={
  //             <div className="discussionContainer" >
  //             Hello
  //           </div>
  //           }/>
  //         </Routes>
  //       </div>
  //     </div>
  //   </Router>
  // );
}

export default App;
