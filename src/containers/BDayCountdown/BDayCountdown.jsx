import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from './constants'
import { setTitle, setDate, setBDate, setBMonth, setBDay, setBYear, setDiff } from './actions'
import { CardContainer } from '../../elements/card-container/card-container';
import { Select, Grid, Button } from '@material-ui/core';


class BDayCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.props.setTitle(constants.title);
    this.props.setDate(new Date());
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMonthChange(e) {
    this.props.setBMonth(Number(e.target.value))
  }

  handleDayChange(e) {
    this.props.setBDay(Number(e.target.value))
  }

  handleSubmit() {
    const{bYear, bMonth, bDay, currentDate} = this.props.bdc;
    const today = Date.parse(currentDate);
    const nextBDate = this.getNextBDate(bYear, bMonth, bDay, today);
    const diff = nextBDate - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    this.props.setDiff({days, hours});
  }

  getNextBDate(Year, Month, Day, today){ 
    const selectedDate = Date.parse(`${Year}-${Month+1}-${Day}`)
    const nextBYear = (selectedDate < today) ? Year+1 : Year
    const nextBDate = Date.parse(`${nextBYear}-${Month+1}-${Day}`)
    
    return nextBDate
  }

  result() {
    const {diffInDays} = this.props.bdc;
    if (diffInDays === null) return
    switch(diffInDays.days) {
      case 365:
        return 'HAPPY BIRTHDAY!!'
      case 0:
        return `Only ${diffInDays.hours}hrs till your birthday`
      default:
        return `${diffInDays.days} days, ${diffInDays.hours}hrs till your birthday`
    }
  }

  render() {
    const { title, bMonth} = this.props.bdc;
    const monthSelector = constants.months.map((month,i) => {
      return (
        <option key={`month-${i}`} value={i}>{month.name}</option>
      )
    })
    const daysLength = constants.months[bMonth].days;
    const days = Array.from({length: daysLength}, (v, i) => i+1);
    const daySelector = days.map((day,i) => {
      return (
        <option key={`day-${i}`} value={day}>{day}</option>
      )
    })
    
    return (
      <CardContainer title={title} >
        <h2>{this.result()}</h2>
        <form style={{width:'100%'}}>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Select 
                native 
                name='month' 
                id='bday-month'
                onChange={this.handleMonthChange}>
                  {monthSelector}
              </Select>
            </Grid>
            <Grid item>
              <Select 
                native 
                name='day' 
                id='bday-day'
                onChange={this.handleDayChange}>
                  {daySelector}
              </Select>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={this.handleSubmit}>Send</Button>
            </Grid>
          </Grid>
        </form>
      </CardContainer>
    )
  }
}
const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setTitle, 
    setDate, 
    setBDate,
    setBMonth,
    setBDay,
    setBYear,
    setDiff
  }, dispatch)
}
const mapStateToProps = state => ({
  bdc: state.bdc
})

export default connect(mapStateToProps, matchDispatchToProps)(BDayCountdown);