
import TodoActionTypes from '../actionTypes/TodoActionTypes';

const todoDraftReducer = (state = '', action = {}) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return '';

    case TodoActionTypes.UPDATE_DRAFT:
      return action.text;

    default:
      return state;
  }

}

export default todoDraftReducer;