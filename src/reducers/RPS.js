const RPS = (state={}, action) => {
  switch(action.type){
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }
    case 'SET_USER_HAND':
      return {
        ...state,
        userHand: action.userHand
      }
    case 'SET_COMPUTER_HAND':
        return {
          ...state,
          computerHand: action.computerHand
        }
    default:
      return state; 
   }
}

export default RPS;