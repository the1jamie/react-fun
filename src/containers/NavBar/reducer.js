import * as constants from './constants';

const defaultState = {
  isMenuDrawerOpen: false
}

const menuDrawer = (state = defaultState, action) => {
  const {type, payload} = action;
  switch(type) {
    case constants.TOGGLE_DRAWER:
      return {
        ...state,
        isMenuDrawerOpen: (!state.isMenuDrawerOpen) ? true : false
      }
    case constants.CLOSE_DRAWER:
      return {
        ...state,
        isMenuDrawerOpen: false
      }
    default:
      return state;
  }

}

export default menuDrawer;