import React from 'react';
 
const Todo = (props) => {
   return (
       <div className={props.todo.complete ? "line-through" : ""}>
           {props.todo.task}
       </div>
   );
};
 
export default Todo;