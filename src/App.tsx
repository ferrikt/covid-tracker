import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

import { ThemeProvider } from "@material-ui/styles";

import {
  AppBar,
  CssBaseline,
  Typography,
  createMuiTheme,
} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontSize: 14,
    fontFamily: [
      "Avenir Next W01",
      "Avenir Next W00",
      "Avenir Next",
      "Avenir",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
  palette: {
    type: "dark",

    background: {
      default: "black",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
