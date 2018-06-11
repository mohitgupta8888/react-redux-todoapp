
import React from 'react';
import NewTodoContainer from '../containers/NewToDoContainer';

function Header() {
  return (
    <header id="header">
      <h1>todos</h1>
      <NewTodoContainer />
    </header>
  );
}

export default Header;