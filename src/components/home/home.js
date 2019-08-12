import React, { Component } from 'react';
import { CardContainer } from '../../elements/card-container/card-container';

export class Home extends Component {
  render() {
    const message = "Hey ya'll, this is me messin' React. Checkout the menu to see some of the projects I've been fooling around with."
    return (
      <CardContainer>
        <p>{message}</p>
      </CardContainer>
    )
  }
}