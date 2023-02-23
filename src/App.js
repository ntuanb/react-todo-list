import './App.css';
import React, { useState } from 'react';

import Header from './components/Header/Header';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";

import mockedJson from './mocks/todos.json';

const getStoredTodos = () => {
  try {
    const todoList = JSON.parse(window.localStorage.getItem('todoList'));
    if (!todoList) return mockedJson;
    return todoList
  } catch (e) {
    return mockedJson
  }
}

const setStoredTodos = (todoList) => {
  window.localStorage.setItem('todoList', JSON.stringify(todoList));
}

function App() {
  const [ todoList, setTodoList ] = useState(getStoredTodos());

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });

    setStoredTodos(mapped);
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setStoredTodos(filtered);
    setTodoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, { id: Math.ceil(Math.random() * 10000), task: userInput, complete: false }];
    setStoredTodos(copy);
    setTodoList(copy);
  }

  return (
    <div className="App">
      <div className="mb-10">
        <Header/>
      </div>
      <div className="grid grid-cols-2 gap-4 ml-10 mr-10">
        <TodoList
          todoList={todoList}
          addTask={addTask}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
          />

        <TodoForm addTask={addTask}/>
      </div>
    </div>
  );
}

export default App;
