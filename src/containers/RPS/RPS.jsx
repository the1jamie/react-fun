import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from './constants';
import { setTitle, showUserHand, showComputerHand, showResult, setStreak, endStreak, setChoice } from './actions'
import { CardContainer } from '../../elements/card-container/card-container';
import { Button, Grid } from '@material-ui/core';

const { TITLE, ROCK, PAPER, SCISSORS } = constants;

class RPS extends React.Component {
  constructor(props) {
    super(props);
    const { setTitle, setChoice } = this.props;
    setTitle( TITLE );
    setChoice({
      ROCK,
      PAPER,
      SCISSORS
    })
    this.playHand = this.playHand.bind(this)
  }

  randomNumberSelector( max=3 ) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  convertToWords(randomNum) {
    switch(randomNum) {
      case 0:
        return ROCK;
      case 1:
        return PAPER;
      case 2 :
        return SCISSORS;
      default:
        return;
    }
  }

  get getChoice(){
    const randomNum = this.randomNumberSelector()
    return this.convertToWords(randomNum);
  }

  playHand(value) {
    const userNum = value
    const computerNum = this.randomNumberSelector()
    const { showResult, showUserHand, showComputerHand, setStreak, endStreak } = this.props;
    const { WIN, LOSE, DRAW } = constants
    const winner = (userNum > computerNum 
      || ((userNum === 0) && (computerNum === 2))) 
      && !((userNum === 2) && (computerNum === 0))

    if(winner) {
      showResult(WIN);
      setStreak()
    } else if(userNum === computerNum) {
      showResult(DRAW)
    } else {
      showResult(LOSE)
      endStreak()
    }
    showUserHand(this.convertToWords(userNum))
    showComputerHand(this.convertToWords(computerNum))
  }

  render() {
    const { title, userHand, computerHand, result, streak, choices } = this.props.rps;
    const handChoiceButtons = Object.keys(choices).map((choice, index) => {
      return (
        <Grid item key={index}>
          <Button variant="contained" color="primary" onClick={() => this.playHand(index)}>{choice}</Button>
        </Grid>
      )
    })
    return (
      <CardContainer title={title}>
        <p>You chose: {userHand}</p>
        <p>Computer chose: {computerHand}</p>
        <h2>{result}</h2>
        <p>Streak: {streak}</p>
        <Grid container direction="row" justify="space-evenly">
          { handChoiceButtons }
        </Grid>
      </CardContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    rps: state.rps
  }
}

const matchDispatcherToProps = dispatch => {
  return bindActionCreators ({
    setTitle,
    showUserHand,
    showComputerHand,
    showResult,
    setStreak,
    endStreak,
    setChoice
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatcherToProps)(RPS)