import React from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2';

import { ThemeProvider } from "@material-ui/styles";

import {
  AppBar,
  CssBaseline,
  Typography,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});


// .panel-container .margin-container {
//   position: relative;
//   border: 1px solid #363636;
//   margin: 10px;
// }

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <AppBar color="inherit">
      <div style={{ marginTop: 50 }}>
        div should be white, background should be dark
      </div>
        <div >App bar background should be dark!</div>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
