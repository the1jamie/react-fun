import React, {Component} from 'react';
import { CardContainer } from '../../elements/card-container/card-container';
import TextField from '@material-ui/core/TextField';

export class BdayCountdown extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Birthday Countdown'
    }
  }

  inDays(bDay, currentDay) {
    var CDtime = currentDay.getTime();
    var BDtime = bDay.getTime();
    console.log( parseInt(( CDtime - BDtime )/(24*3600*1000)) )
  }

  // diffMonths(bDay, currentDay) {
    
  // }

  birthDate(e) {
    const current = new Date()
    const bDay = new Date(e.target.value)
    
    this.inDays(bDay, current);
  }

  render() {
    return (
      <div>
        <CardContainer title={this.state.title}>
          <form noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              onChange={this.birthDate.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </CardContainer>
      </div>
    )
  }
} 