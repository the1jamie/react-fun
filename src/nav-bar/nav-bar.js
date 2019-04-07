import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon } from '@material-ui/core';

export class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      title: 'Welcome',
    }
  }

  render() {
    return (
      <AppBar position={ this.props.position }>
        <Toolbar>
          <IconButton>
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" color="textPrimary" align="center" >
            { this.state.title }
          </Typography>
        </Toolbar>
      </AppBar>
    )
  };
}

