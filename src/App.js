import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'
import TaskAddingBar from './TaskAddingBar'
import DeleteAllDoneButton from './DeleteAllDoneButton'
import { ToDoListStore } from './ToDoListStore'

class App extends Component {
  render() {
    return (
        <ToDoListStore>
            <div className="App">
                <header className="App-header">
                    <ToDoList/>
                    <TaskAddingBar/>
                    <DeleteAllDoneButton/>
                </header>
            </div>
        </ToDoListStore>
    );
  }
}

export default App;