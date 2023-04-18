import './Scss/reset.scss';
import './Scss/general.scss';
import Home from './pages/home/Home';
import AddTodo from './pages/addTodo/AddTodo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import EditTodo from './pages/editTodo/EditTodo';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home todos={todos} saveTodos={saveTodos} />,
    },
    {
      path: '/addTodo',
      element: <AddTodo todos={todos} saveTodos={saveTodos} />,
    },
    {
      path: '/editTodo/:id',
      element: <EditTodo todos={todos} saveTodos={saveTodos} />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
