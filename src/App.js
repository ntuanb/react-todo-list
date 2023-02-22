import './App.css';
import React, { useState } from 'react';

import Header from './components/Header/Header';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";

import todosMock from "./mocks/todos.json";

function App() {
  const [ todoList, setTodoList ] = useState(todosMock);

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }

  return (
    <div className="App">
      <div className="mb-10">
        <Header/>
      </div>
      <div class="grid grid-cols-2 gap-4 ml-10 mr-10">
        <TodoList todoList={todoList} addTask={addTask} handleToggle={handleToggle} handleFilter={handleFilter} />

        <TodoForm addTask={addTask}/>
      </div>
    </div>
  );
}

export default App;
