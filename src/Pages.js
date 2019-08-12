import { Home } from './components/home/home';
import { PigLatin } from './components/pig-latin/pig-latin';
import { BdayCountdown } from './components/bday-countdown/bday-countdown';
import { RPS } from './components/rps/rps';

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