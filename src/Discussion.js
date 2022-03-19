import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import mytheme from "./Theme";
import "./Discussion.css";
const Disscussion = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={mytheme}>
        <Card className="discussioncontainer" sx={{backgroundColor:"background.default"}}>
          <Typography className="posttime" variant="caption" color="info.main">
            Posted 29mins ago
          </Typography>
          <div className="QuestionHeader">
            <Typography variant="h2" color="primary.main">
              What is the name of PM of India?
            </Typography>
            <div className="tags">
              <Typography variant="subtitle2" color="secondary.main">
                <ul>
                  <li>Development</li>
                  <li>Hackathon</li>
                  <li>thanos</li>
                </ul>
              </Typography>
            </div>
          </div>
          <Card className="content" sx={{backgroundColor:'background.inside'}}>
            <Typography variant="body2" color="common.main">
              I was wandering about who is the PM of india.
              <br />
              Although I should know this, but i Forgot.
            </Typography>
          </Card>
          <div className="footerbuttons">
            <Button variant="outlined" disableElevation>
              Reply
            </Button>
          </div>
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Disscussion;
