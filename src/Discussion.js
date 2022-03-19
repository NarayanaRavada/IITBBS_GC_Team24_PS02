import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import mytheme from "./Theme";
import CloseIcon from '@mui/icons-material/Close';
import "./Discussion.css";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
const Disscussion = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={mytheme}>
        <Card
          className="discussioncontainer"
          sx={{ backgroundColor: "background.default" }}
        >
        <CardHeader action={<IconButton onClick={props.onClicked} color="secondary" aria-label="closebutton" sx={{float:'left'}}>
              <CloseIcon />
            </IconButton>}>
        </CardHeader>

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
          <Card
            className="content"
            sx={{ backgroundColor: "background.inside", boxShadow: 0 }}
          >
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
            <IconButton color="secondary" aria-label="add an alarm">
              <ThumbUpAltSharpIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <ThumbDownAltSharpIcon />
            </IconButton>
          </div>
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Disscussion;
