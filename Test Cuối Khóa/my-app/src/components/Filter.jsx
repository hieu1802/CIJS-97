import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="todoFilter">
      <button 
        className={filter === 'All' ? 'active' : ''} 
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button 
        className={filter === 'Active' ? 'active' : ''} 
        onClick={() => setFilter('Active')}
      >
        Active
      </button>
      <button 
        className={filter === 'Completed' ? 'active' : ''} 
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default Filter;