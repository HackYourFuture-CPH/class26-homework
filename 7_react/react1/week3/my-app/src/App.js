import './App.css';
import Header from './Header/Header';
import React from 'react'
import TodoList from './TodoList/TodoList';


function App() {
  return (
    <div className="app">
  <Header/>
  <TodoList/>

    </div>
  );
}

export default App;