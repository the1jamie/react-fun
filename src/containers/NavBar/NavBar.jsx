import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDrawer, closeDrawer } from './actions'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Pages } from '../../Pages';
import MenuDrawer from '../../components/menuDrawer';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick = () => {
    this.props.toggleDrawer()
  }

  handleClose = () => { 
    this.props.closeDrawer()   
  }


  render() {
    const { isMenuDrawerOpen: open } = this.props.menuDrawer;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <MenuDrawer open={open} onClick={this.handleClose} items={Pages} />
      </div>
    );
  };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators ({
    toggleDrawer,
    closeDrawer
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    menuDrawer: state.menuDrawer
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(NavBar);