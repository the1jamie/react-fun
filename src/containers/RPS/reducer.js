import * as constants from './constants';

const defaultState = {
  title: '',
  userHand: '',
  computerHand: '',
  result: '',
  streak: 0,
  choices: {}
}

const RPS = (state = defaultState, action) => {
  const {type, payload} = action;
  switch(type){
    case constants.SET_TITLE:
      return {
        ...state,
        title: payload
      }
    case constants.SHOW_USER_HAND:
      return {
        ...state,
        userHand: payload
      }
    case constants.SHOW_COMPUTER_HAND:
      return {
        ...state,
        computerHand: payload
      }
    case constants.SHOW_RESULT:
      return {
        ...state,
        result: payload
      }
    case constants.ADD_TO_STREAK:
      return {
        ...state,
        streak: state.streak +1
      }
    case constants.END_STREAK:
      return {
        ...state,
        streak: 0
      }
    case constants.SET_CHOICES:
      return {
        ...state,
        choices: payload
      }
    default:
      return state; 
   }
}

export default RPS;