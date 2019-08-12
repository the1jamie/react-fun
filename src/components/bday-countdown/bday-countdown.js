import React, {Component} from 'react';
import { CardContainer } from '../../elements/card-container/card-container';

export class BdayCountdown extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Birthday Countdown'
    }
  }

  render() {
    const date = new Date(563,602,996,693);
    date.setFullYear(1987,9,10)
    const mydate = date.getFullYea
    return (
      <div>
        <CardContainer title={this.state.title}>
          <h2>Test date:{mydate}</h2>
        </CardContainer>
      </div>
    )
  }
} 