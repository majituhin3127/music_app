import ReactDOM from "react-dom/client";
import App from "./App";
import ReduxProvider from "./utilities/provider/ReduxProvider";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme/darkTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </ReduxProvider>
);
