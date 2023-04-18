import React from 'react';
import './home.scss';
import TodoList from '../../components/todoList/TodoList';

const Home = ({ todos, saveTodos }) => {
  return (
    <div className="home">
      <div className="container">
        <TodoList todos={todos} saveTodos={saveTodos}/>
      </div>
    </div>
  );
};

export default Home;
