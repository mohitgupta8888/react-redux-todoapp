/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

import TodoActionTypes from '../actionTypes/TodoActionTypes';

const Actions = {
  addTodo(text) {
    return {
      type: TodoActionTypes.ADD_TODO,
      text,
    };
  },

  deleteCompletedTodos() {
    return {
      type: TodoActionTypes.DELETE_COMPLETED_TODOS,
    };
  },

  deleteTodo(id) {
    return {
      type: TodoActionTypes.DELETE_TODO,
      id,
    };
  },

  editTodo(id, text) {
    return {
      type: TodoActionTypes.EDIT_TODO,
      id,
      text,
    };
  },

  startEditingTodo(id) {
    return {
      type: TodoActionTypes.START_EDITING_TODO,
      id,
    };
  },

  stopEditingTodo() {
    return {
      type: TodoActionTypes.STOP_EDITING_TODO,
    };
  },

  toggleAllTodos() {
    return {
      type: TodoActionTypes.TOGGLE_ALL_TODOS,
    };
  },

  toggleTodo(id) {
    return {
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    };
  },

  updateDraft(text) {
    return {
      type: TodoActionTypes.UPDATE_DRAFT,
      text,
    };
  },
};

export default Actions;
