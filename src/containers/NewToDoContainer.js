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
import NewToDo from '../views/NewTodo';
import TodoActions from '../actions/TodoActions';

const mapStateToProps = (state) => ({
  draft: state.draft,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => dispatch(TodoActions.addTodo(text)),
    onUpdateDraft: (text) => dispatch(TodoActions.updateDraft(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewToDo);
