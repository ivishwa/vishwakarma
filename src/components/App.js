import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';


const App = React.createClass({
  render() {
    return(
      <div>
        <Header/>
        <Container/>
        <Footer/>
      </div>
    )
  }
});

export default App;
