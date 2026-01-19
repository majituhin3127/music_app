import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e293b",
      paper: "#0f172a",   
    },
    primary: {
      main: "#1DB954",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
    },
  },
});

export default darkTheme;
