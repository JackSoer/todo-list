import React, { useEffect } from 'react';
import { useState } from 'react';
import './todoProgressInfo.scss';

const TodoProgressInfo = ({ todos }) => {
  const [finishedTodosCount, setFinishedTodosCount] = useState(0);
  const [inProgressTodosCount, setInProgressTodosCount] = useState(0);

  useEffect(() => {
    let inProgressTodosCounter = 0;
    let finishedTodosCounter = 0;

    todos.forEach((todo) => {
      if (!todo.isDone) {
        inProgressTodosCounter++;
      } else {
        finishedTodosCounter++;
      }
    });

    setFinishedTodosCount(finishedTodosCounter);
    setInProgressTodosCount(inProgressTodosCounter);
  }, [todos]);

  return (
    <div className="todo-list__extra-info">
      <p className="todo-list__finished-info">{finishedTodosCount} Finished</p>
      <p className="todo-list__progress-info">
        {inProgressTodosCount} in Progress
      </p>
    </div>
  );
};

export default TodoProgressInfo;
