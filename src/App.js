import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/nav-bar/nav-bar';
import { Error } from './error';
import { Pages } from './Pages';

import './App.css';

class App extends Component {
  constructor() {
    super();
    const navBar = {
      position: "static"
    }

    this.state = {
      navBar
    }

  }
  render() {
    const pages = Object.keys(Pages).map(page => {
      return <Route exact path={Pages[page].path} component={Pages[page].component}/>
    })
    return (
      <div>
        <Router>
          <NavBar position={this.state.navBar.position} />
          <Switch>
            { pages }
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    )}
}

export default App;
