import TodoActionTypes from '../actionTypes/TodoActionTypes';

const todoEditReducer = (state = '', action = {}) => {
  switch (action.type) {
    case TodoActionTypes.START_EDITING_TODO:
      return action.id;

    case TodoActionTypes.STOP_EDITING_TODO:
      return '';

    default:
      return state;
  }
}

export default todoEditReducer;