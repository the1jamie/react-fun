import * as constants from './constants';

export const setTitle = title => ({
  type: constants.SET_TITLE,
  payload: title
})

export const setGreeting = greeting => ({
  type: constants.SET_GREETING,
  payload: greeting
})