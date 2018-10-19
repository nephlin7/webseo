import React, { Component } from 'react';
import Header from './components/shared/Header';
import Footer from "./components/shared/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import { Helmet } from "react-helmet";
import { Route, Link, Switch, } from "react-router-dom";
import './App.css';
import '../node_modules/material-design-lite/material.min.js'

class App extends Component {
  render() {
    return (
<>

  <Header>
          <Link className="mdl-navigation__link" to='/'>Home</Link>
          <Link className="mdl-navigation__link" to='/about'>About</Link>
          <Link className="mdl-navigation__link" to='/services'>Services</Link>
  </Header>
  <main>
    <div className="App">
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
    </Switch>
    </div>
  </main>
  <Footer />
</>
    );
  }
}

export default App;
