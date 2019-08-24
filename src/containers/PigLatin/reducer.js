import * as constants from './constants'

const defaultState = {
  title: '',
  rowMax: 0,
  english: '',
  pigLatin: ''
}

const pigLatin = ( state = defaultState, action ) => {
  const { type, payload } = action
  switch(type){
    case constants.SET_TITLE:
      return {
        ...state,
        title: payload
      }
    case constants.SET_ROW_MAX:
      return {
        ...state,
        rowMax: payload
      }
    case constants.SET_ENGLISH:
      return {
        ...state,
          english: payload
        };
    case constants.SHOW_PIGLATIN:
      return {
        ...state,
          pigLatin: payload
        };
    default:
      return state; 
   }
}

export default pigLatin;