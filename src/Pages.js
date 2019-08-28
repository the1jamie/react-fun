import Home from './containers/Home/Home';
import PigLatin from './containers/PigLatin/PigLatin';
import BdayCountdown from './containers/BDayCountdown/BDayCountdown';
import RPS from './containers/RPS/RPS';

export const Pages = {
  HOME: {
    name: 'Home',
    path: '/',
    component: Home
  },
  PIG_LATIN: {
    name: 'Pig Latin',
    path: '/pig-latin',
    component: PigLatin
  },
  Bday_CountDown: {
    name: 'Bday Countdown',
    path: '/bday-countdown',
    component: BdayCountdown
  },
  RPS: {
    name: 'Rock, Paper, Scissprs',
    path: '/rock-paper-scissors',
    component: RPS
  }
}