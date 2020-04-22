import React from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import 'antd/dist/antd.css'
import { Layout, PageHeader } from 'antd'

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <PageHeader className="site-page-header" title="Todo List" />
      <Content>
        <ToDoList style={{ width: '500px'}}/>
      </Content>
    </div>
  )
}

export default App
