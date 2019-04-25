import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';

export class CardContainer extends Component {

  render() {
    return (
      <div className="card-comtainer">
        <Card>
          <CardContent>
            {this.props.children}
          </CardContent>
        </Card>
      </div>
    );
  }
}
CardContainer.propTypes = {
  children: PropTypes.node.isRequired
}