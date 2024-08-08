import React from 'react';


function TodoList({ tasks, toggleComplete, deleteTask, clearCompleted }) {
  return (
    <div className="todoList">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`todoItem ${task.completed ? 'completed' : ''}`}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleComplete(task.id)}
            />
            {task.text}
            <button onClick={() => deleteTask(task.id)} className="deleteButton"><p>X</p></button>
          </li>
          
        ))}
      </ul>
      <button onClick={clearCompleted} className="clearButton">Delete All</button>
    </div>
  );
}

export default TodoList;