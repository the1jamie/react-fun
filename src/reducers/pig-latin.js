const pigLatin = (state={}, action) => {
  switch(action.type){
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }
    case 'SET_ROW_MAX':
      return {
        ...state,
        rowMax: action.rowMax
      }
    case 'SET_ENGLISH':
      return {
        ...state,
          english: action.english
        };
    case 'SHOW_PIGLATIN':
      return {
        ...state,
          pigLatin: action.latin
        };
    default:
      return state; 
   }
}

export default pigLatin;