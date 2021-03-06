import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from './constants';
import { setTitle, setGreeting } from './actions'
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import me from '../../static/images/me.jpg'
import { CardContainer } from '../../elements/card-container/card-container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { TITLE, GREETING } = constants;
    const { setTitle, setGreeting } = this.props;
    setTitle(TITLE)
    setGreeting(GREETING)
  }


  render() {
    const { title, greeting } = this.props.home;
    const size = '150px'
    const bigHead = {
        width: size,
        height: size,
    };

    return (
      <CardContainer title={title}>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Jamie Jarvis" src={me} style={bigHead}/>
        </Grid>
          <p align="center">{greeting}</p>
      </CardContainer>
    )
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setTitle,
    setGreeting
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    home: state.home
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home)
