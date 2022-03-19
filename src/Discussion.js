import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import mytheme from "./Theme";
import CloseIcon from "@mui/icons-material/Close";
import "./Discussion.css";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import Comment from "./Comment";
export function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
const Disscussion = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={mytheme}>
        <Card
          className="discussioncontainer"
          sx={{ backgroundColor: "background.default" }}
        >
          <CardHeader
            action={
              <IconButton
                onClick={props.onClicked}
                color="secondary"
                aria-label="closebutton"
                sx={{ float: "left" }}
              >
                
                <CloseIcon />
              </IconButton>
            }
            title=
                {
                  <Typography
                    variant="h6"
                    color="secondary.main"
                  >
                  Topic By @{props.Topic.Writer}
                  </Typography>
                }
          ></CardHeader>
          <div className="QuestionHeader">
            <Typography variant="h2" color="primary.main">
              {props.Topic.title}
            </Typography>
            <div className="tags">
              <Typography variant="subtitle2" color="secondary.main">
                <ul>
                  {props.Topic.Tags.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
              </Typography>
            </div>
          </div>
          <Card
            className="content"
            sx={{ backgroundColor: "background.inside", boxShadow: 0 }}
          >
            <Typography variant="body2" color="common.main">
              {props.Topic.Content}
            </Typography>
          </Card>
          <div
            style={{
              padding: "10px",
              display: "flex",
              position: "relative",
              "flex-direction": "row-reverse",
            }}
          >
            <Button variant="outlined" disableElevation>
              Reply
            </Button>
            <IconButton color="secondary">
              <ThumbUpAltSharpIcon />
            </IconButton>
            <IconButton color="secondary">
              <ThumbDownAltSharpIcon />
            </IconButton>
          </div>
          <Typography variant="caption" color="info.main">
            Posted {
              timeSince(new Date(props.Topic.Posttime))
            } ago
          </Typography>
          {props.Topic.Replies.map((reply) => (
            <Comment Comment={reply} />
          ))}
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Disscussion;
