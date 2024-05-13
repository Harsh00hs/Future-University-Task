import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

function TodoRow({ todo, onDelete, onComplete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="todo-content">
        <Checkbox checked={todo.completed} onChange={() => onComplete(todo.id)} />
        <span>{todo.text}</span>
      </div>
      {hovered && <Button onClick={() => onDelete(todo.id)}>X</Button>}
    </div>
  );
}

export default TodoRow;
