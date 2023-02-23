import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
 
const Todo = (props) => {
   return (
       <div className={props.todo.complete ? "line-through" : ""}>
           {props.todo.task}

           <TrashIcon className="h-6 w-5 inline-block" onClick={() => {props.handleToggle(props.id)}}/>
       </div>
   );
};
 
export default Todo;