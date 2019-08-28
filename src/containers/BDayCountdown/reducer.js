import * as constants from './constants';

const defaultState = {
  title: '',
  currentDate: null,
  bMonth: 0,
  bDay: 1,
  bYear: new Date().getFullYear(),
  bDate: null,
  diffInDays: null,
}

const bdc = (state = defaultState, action) => {
  const {type, payload} = action;
  switch(type) {
    case constants.SET_TITLE:
        return {
          ...state,
          title: payload
        }
    case constants.SET_CURRENT_DATE:
      return {
        ...state,
        currentDate: payload
      }
    case constants.SET_BDATE:
      return {
        ...state,
        bDate: payload
      }
    case constants.SET_BMONTH:
      return {
        ...state,
        bMonth: payload
      }
    case constants.SET_BDAY:
      return {
        ...state,
        bDay: payload
      }
    case constants.SET_BYEAR:
      return {
        ...state,
        bYear: payload
      }
    case constants.SET_DIFF:
      return {
        ...state,
        diffInDays: payload
      }
    default:
      return state;
  }
}

export default bdc;