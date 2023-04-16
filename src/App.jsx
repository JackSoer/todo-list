import './Scss/reset.scss';
import './Scss/general.scss';
import TodoList from './components/todoList/TodoList';
import Home from './pages/home/Home';
import AddTodo from './pages/addTodo/AddTodo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/addTodo',
      element: <AddTodo />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
