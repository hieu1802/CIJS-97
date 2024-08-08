import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Add details" 
        className="todoInput"
      />
      <button type="submit" className="todoButton">Add</button>
    </form>
  );
}

export default TodoForm;