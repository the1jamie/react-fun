import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid } from '@material-ui/core';

export class CardContainer extends Component {

  render() {
    return (
      <div className="card-container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Card>
            <CardContent>
              <h1 align="center">{this.props.title}</h1>
              {this.props.children}
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}
CardContainer.propTypes = {
  children: PropTypes.node.isRequired
}