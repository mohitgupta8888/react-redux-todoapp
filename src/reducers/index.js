import { combineReducers } from 'redux'

import todoReducer from './TodoReducer';
import todoDraftReducer from './TodoDraftReducer';
import todoEditReducer from './todoEditReducer';

export default combineReducers({
  todos: todoReducer,
  draft: todoDraftReducer,
  editing: todoEditReducer
});
