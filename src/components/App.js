import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
const muiTheme = getMuiTheme({
  palette: {
    textColor: '#1A237E',
  }
});
const App = React.createClass({
  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
        <Header/>
        <Container/>
        </div>
      </MuiThemeProvider>
    )
  }
});

export default App;
