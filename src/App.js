import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'
import TaskAddingBar from './TaskAddingBar'
import DeleteAllDoneButton from './DeleteAllDoneButton'
import * as context from './ToDoListStore'

class App extends Component {
  render() {
    const { ToDoListStore } = context;
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

    getNumberOfTask = (id) =>{
        return id.substring(id.indexOf('_') + 1);
    }
}

export default App;