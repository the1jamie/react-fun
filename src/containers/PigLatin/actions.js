import * as constants from './constants';

export const setTitle = title => ({
  type: constants.SET_TITLE,
  payload: title
})

export const setRowsMax = rowMax => ({
  type: constants.SET_ROW_MAX,
  payload: rowMax
})

export const setEnglish = english => ({
  type: constants.SET_ENGLISH,
  payload: english
 })

 export const setPigLatin = piglatin => ({
   type: constants.SHOW_PIGLATIN,
   payload: piglatin
 })