
import React from 'react';

import Todo from './Todo';

// groceries: listitems purchased

const TodoList = props => {
  
  return (
    <div className="task-list">
      {props.listitems.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
       <button className="clear-btn" onClick={props.clearcompleted}>
      Clear Completed
      </button> 
    </div>
  );
};

export default TodoList;
