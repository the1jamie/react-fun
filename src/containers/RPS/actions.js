import * as constants from './constants'; 

export const setTitle = title => ({
  type: constants.SET_TITLE,
  payload: title
})

export const showUserHand = hand => ({
  type: constants.SHOW_USER_HAND,
  payload: hand
})

export const showComputerHand = hand => ({
  type: constants.SHOW_COMPUTER_HAND,
  payload: hand
})

export const showResult = result => ({
  type: constants.SHOW_RESULT,
  payload: result
})

export const setStreak = () => ({
  type: constants.ADD_TO_STREAK
})

export const endStreak = () => ({
  type: constants.END_STREAK
})

export const setChoice = choices => ({
  type: constants.SET_CHOICES,
  payload: choices
})