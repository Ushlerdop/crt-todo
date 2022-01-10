import React, { Component } from 'react';
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'Pick up children from Granny',
          description: `Don't forget about Harry...at least for today`,
          isDone: false,
          isImportant: true,
          editedDate: new Date().toLocaleDateString(),
          id: Date.now()+1,
        },
        {
          title: 'Breakfast',
          description: 'As i remember, she asked for tea and boiled eggs',
          isDone: false,
          isImportant: false,
          editedDate: new Date().toLocaleDateString(),
          id: Date.now(),
        },
        {
          title: 'Fix the coffee machine',
          description: `It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken roken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken roken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken roken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken It seems to be broken `,
          isDone: true,
          isImportant: false,
          editedDate: new Date().toLocaleDateString(),
          id: Date.now()+2,
        },
      ],
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.isDoneToggle = this.isDoneToggle.bind(this);
    this.isImportantToggle = this.isImportantToggle.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: [task, ...this.state.tasks]
    })
  }

  deleteTask(id) {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks,
    })
  }

  updateTask(id, updatedTask) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return updatedTask;
        }
        return task;
      })
    })
  }

  isDoneToggle(id) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          }
        }
        return task;
      })
    })
  }

  isImportantToggle(id) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isImportant: !task.isImportant,
          }
        }
        return task;
      })
    })
  }

  render() {
    return (
      <div className={styles.todoApp}>
        <TodoAddForm 
          addTask={this.addTask}
          tasks={this.state.tasks}
        />
        <TodoList
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask} 
          isDoneToggle={this.isDoneToggle} 
          isImportantToggle={this.isImportantToggle}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}

export default Todo;