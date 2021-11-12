import React, { Component } from 'react';
import AddTask from './AddTask/AddTask';
import './App.css';
import Task from './Task/Task';

class App extends Component {
  state = {
    tasks: [{ id: 1, title: 'Get bookssss' }, { id: 2, title: 'Get groceries' }, { id: 3, title: 'Do dishes' }]
  }

  deleteTaskHandler = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks })
  }

  render() {
    return (
      <div className ="container">
        <div className="App">
          <h1>My Todo List</h1>
          <AddTask></AddTask>
          {this.state.tasks.map(task => {
            return <Task
                key={task.id}
                deleteHandler={() => this.deleteTaskHandler(task.id)}>
                {task.title}
              </Task>
          })}
        </div>
      </div>
    )
  }
}

export default App;
