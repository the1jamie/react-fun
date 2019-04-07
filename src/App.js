import React, { Component } from 'react';
import { NavBar } from './nav-bar/nav-bar'
import { PigLatin } from './pig-latin/pig-latin'
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
    return (
      <div>
        <NavBar position={this.state.navBar.position} ></NavBar>
        <PigLatin></PigLatin>
      </div>
    )}
}

export default App;
