import React from 'react';
import './home.scss';
import TodoList from '../../components/todoList/TodoList';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
