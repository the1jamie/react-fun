import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from './constants';
import { setTitle, setGreeting } from './actions'
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
    return (
      <CardContainer title={title}>
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
