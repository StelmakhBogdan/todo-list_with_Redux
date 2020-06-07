import React from 'react';

import './app.css';
import Footer from '../footer';
import AddTodo from '../../containers/add-todo/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list/visible-todo-list';

const App = () => {
  return (
      <div className="App">
          <h1>Todo-list with Redux</h1>
          <AddTodo />
          <VisibleTodoList />
          <Footer/>
      </div>
  )
};

export default App;