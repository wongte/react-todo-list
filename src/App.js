import React from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <ToDoList />
      </header>
    </div>
  )
}

export default App
