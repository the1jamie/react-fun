import * as constants from './constants'

const defaultState = {
  title: '',
  greeting:''
}

const home = (state = defaultState, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case constants.SET_TITLE:
      return {
        ...state,
        title: payload
      }
    case constants.SET_GREETING:
      return {
        ...state,
        greeting: payload
      }
    default:
      return state
  }
}

export default home