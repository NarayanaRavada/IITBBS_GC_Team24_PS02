import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F518C",
    },
    secondary: {
      main: "#14213D",
    },
    text: {
      primary: "#000",
      secondary: "#7FDEFF",
    },
    info:{
        main:"#a2999e",
    },
    background:{
        paper:"#FFFFFF",
        default:"#faebd7",
        inside:"#eef0f2"
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h2:{
      fontSize:"3.5rem"
    },
  },
});

export default theme;
