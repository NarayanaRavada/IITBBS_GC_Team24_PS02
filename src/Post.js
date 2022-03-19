import { BookmarkBorder, ChatBubbleOutline } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';
const Post = (props) => {
  const onClickedHandler = () =>{
    props.onClicked();
  }
  return (
    <Card style={{ width: "70%", height:"fit-content", marginLeft:'400px' ,marginBottom:"30px"}}>
      <CardHeader
        action={
          <IconButton>
            <BookmarkBorder />
          </IconButton>
        }
        titleTypographyProps={{ variant: "h4" }}
        title={"title"}
        subheader={"@username"}
      />
      <CardContent sx={{ borderTop: 1, borderColor: "#000" }}>
        <Typography style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </CardContent>
      <Card />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#eee",
        }}
      >
        <IconButton onClick={onClickedHandler}>
          <ChatBubbleOutline />
        </IconButton>
        <IconButton>
          <ThumbUpAltSharpIcon />
        </IconButton>
        <IconButton>
          <ThumbDownSharpIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default Post;
