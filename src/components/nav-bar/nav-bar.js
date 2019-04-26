import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';
import { AppBar, Toolbar, IconButton, Typography, Icon, Drawer, List, ListItem} from '@material-ui/core';
import { Pages } from '../../Pages';

export class NavBar extends React.Component{
  constructor(){
    super();
    this.state = {
      title: 'Welcome',
      left: false
    }
  }

  toggleDrawer = (open) => () => {
    this.setState({ left: open });
  };


  render() {
    const pageList = (
      <List className="drawer-list">
        { Object.keys(Pages).map(page => {
          return (
            <ListItem key={page}>
                <NavLink to={Pages[page].path}>{Pages[page].name}</NavLink>             
            </ListItem>
            
          );
          })
        }
    </List>
    )

    return (
      <div>
      <AppBar position={ this.props.position }>
        <Toolbar>
          <IconButton onClick={this.toggleDrawer(true)}>
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" color="textPrimary" align="center" >
            { this.state.title }
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
      <div
        tabIndex={0}
        role="button"
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
        {pageList}
      </div>
    </Drawer>
    </div>
    )
  };
}

