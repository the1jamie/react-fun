import * as constants from './constants';

export const setTitle = title => ({
  type: constants.SET_TITLE,
  payload: title
})

export const setDate = date => ({
  type: constants.SET_CURRENT_DATE,
  payload: date
})

export const setBDate = bdate => ({
  type: constants.SET_BDATE,
  payload: bdate
})

export const setBDay = bday => ({
  type: constants.SET_BDAY,
  payload: bday
})

export const setBMonth = bmonth => ({
  type: constants.SET_BMONTH,
  payload: bmonth
})

export const setBYear = byear => ({
  type: constants.SET_BYEAR,
  payload: byear
})

export const setDiff = days => ({
  type: constants.SET_DIFF,
  payload: days
})

