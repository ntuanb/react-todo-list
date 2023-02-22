import React from 'react';
import Todo from './Todo';
 
const TodoList = (props) => {
   return (
       <div>
           {props.todoList.map(todo => {
               return (
                  <Todo todo={todo} key={todo.id} handleToggle={props.handleToggle} handleFilter={props.handleFilter}/>
               )
           })}

          <button className="mt-10 p-2 bg-slate-100 border-solid border-2 border-slate-100 rounded-md" onClick={props.handleFilter}>Clear Completed</button>
       </div>
   );
};
 
export default TodoList;