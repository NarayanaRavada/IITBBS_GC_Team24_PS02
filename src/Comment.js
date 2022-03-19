import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import mytheme from "./Theme";
import CloseIcon from "@mui/icons-material/Close";
import "./Discussion.css";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import { timeSince } from "./Discussion";
const Comment = (props) => {
  const [commentvisible, setCommentVisible] = useState(false);
  const onToggleSeeReply = () => {
    setCommentVisible((prevstate) => !prevstate);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={mytheme}>
        <Card
          className="CommentContainer"
          sx={{
            backgroundColor: "background.default",
            boxShadow:
              "linear-gradient(rgba(234,25,234,0), rgba(24,275,24,0) ,rgba(24,103,234,0))",
          }}
        >
          <CardHeader
            title={
              <Typography variant="h6" color="secondary.main">
                @{props.Comment.Writer}
              </Typography>
            }
          ></CardHeader>
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
          <div className="commentbuttons">
            <Box sx={{mr:"5px"}}>
              <Button variant="outlined" disableElevation>
                Reply
              </Button>
            </Box>
            {props.Comment.Replies && (
              <Box sx={{mr:"5px"}}>

              <Button variant="outlined" onClick={onToggleSeeReply}>
                {!commentvisible && "See Replies"}
                {commentvisible && "Hide Replies"}
              </Button>
              </Box>
            )}
            <IconButton color="secondary">
              <ThumbUpAltSharpIcon />
            </IconButton>
            <IconButton color="secondary">
              <ThumbDownAltSharpIcon />
            </IconButton>
          </div>
          <Typography variant="caption" color="info.main">
            Posted {timeSince(new Date(props.Comment.Posttime))} ago
          </Typography>
          {props.Comment.Replies &&
            commentvisible &&
            props.Comment.Replies.map((reply) => <Comment Comment={reply} />)}
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Comment;
