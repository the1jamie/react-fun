import React from 'react';
import { CardContainer } from '../../elements/card-container/card-container';


export class RPS extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Rock-Paper-Scissors',
      choice: {
        ROCK: 'Rock',
        PAPER: 'Paper',
        SCISSORS: 'Scissors'
      },
      userHand: '',
      computerHand: '',
      result: '',
      streak: 0
    }

    this.playHand = this.playHand.bind(this)
  }

  randomNumberSelector( max=3 ) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  convertToWords(randomNum) {
    switch(randomNum) {
      case 0:
        return this.state.choice.ROCK;
      case 1:
        return this.state.choice.PAPER;
      case 2 :
        return this.state.choice.SCISSORS;
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

    if(userNum > computerNum || (userNum === 0 && computerNum === 2)) {
      this.setState({result: 'You won!!!' })
      this.setState({streak: this.state.streak+1 })
    } else if(userNum === computerNum) {
      this.setState({result:  'Tie, go again' })
    } else {
    this.setState({result: 'You lose!!' })
    this.setState({streak: 0 })
    }
    this.setState({userHand: this.convertToWords(userNum)})
    this.setState({computerHand: this.convertToWords(computerNum)})
  }

  render() {
    const handChoiceButtons = Object.keys(this.state.choice).map((choice, index) => {
      return (<button key={index} onClick={() => this.playHand(index)}>{choice}</button>)
    })
    return (
      <div>
        <CardContainer title={this.state.title}>
         <div align="center">
           <p>You chose: {this.state.userHand}</p>
           <p>Computer chose: {this.state.computerHand}</p>
           <h2>{this.state.result}</h2>
           <p>Streak: {this.state.streak}</p>
            { handChoiceButtons }
          </div>
        </CardContainer>
      </div>
    )
  }
}