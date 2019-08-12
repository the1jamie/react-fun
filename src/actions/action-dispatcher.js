export const actionDispatcher = () => dispatch => {
  dispatch({
   type: 'CHANGE_PAGE',
   payload: 'result_of_simple_action'
  })
 }