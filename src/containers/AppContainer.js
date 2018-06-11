/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';
import { connect } from 'react-redux';
import AppView from '../views/AppView';
import TodoActions from '../actions/TodoActions';

const mapStateToProps = (state) => ({
  draft: state.draft,
  editing: state.editing,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => dispatch(TodoActions.addTodo(text)),
    onDeleteCompletedTodos: () => dispatch(TodoActions.deleteCompletedTodos()),
    onDeleteTodo: (id) => dispatch(TodoActions.deleteTodo(id)),
    onEditTodo: (id, text) => dispatch(TodoActions.editTodo(id, text)),
    onStartEditingTodo: (id) => dispatch(TodoActions.startEditingTodo(id)),
    onStopEditingTodo: () => dispatch(TodoActions.stopEditingTodo()),
    onToggleAllTodos: () => dispatch(TodoActions.toggleAllTodos()),
    onToggleTodo: (id) => dispatch(TodoActions.toggleTodo(id)),
    onUpdateDraft: (text) => dispatch(TodoActions.updateDraft(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
