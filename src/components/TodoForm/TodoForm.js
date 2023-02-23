import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'

const TodoForm = (props) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(userInput);
    setUserInput('');
  }

    return (
       <form onSubmit={handleSubmit}>
          <input className="p-2 border-solid border-2 border-slate-100 rounded-md block w-full" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." required/>
          <button className="p-2 mt-2 bg-slate-100 border-solid border-2 border-slate-100 rounded-md block" type="submit"><PlusIcon className="h-6 w-5"/></button>
       </form>
    );
};
 
export default TodoForm;