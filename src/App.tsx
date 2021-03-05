import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import DataContextProvider from "./context/DataContext";

import { ThemeProvider } from "theme-ui";

const theme = {
  fonts: {
    body:
      "Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif",
    //heading: '"Avenir Next", sans-serif',
    //monospace: "Menlo, monospace",
  },
  colors: {
    text: "#bdbdbd",
    background: "#000000",
    primary: "#e60000",
    secondary: "#fff",
  },
};

// 1. create a context and provider
// 2. wrap app in a context
// 3.context should have conuntries
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DataContextProvider>
        <Dashboard />
      </DataContextProvider>
    </ThemeProvider>
  );
};

export default App;
