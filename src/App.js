import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './containers/NavBar/NavBar';
import { Error } from './error';
import { Pages } from './Pages';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: {
        position: "static"
      }
    }

  }
  render() {
    const pages = Object.keys(Pages).map((page, i) => {
      return <Route exact key={i} path={Pages[page].path} component={Pages[page].component}/>
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
