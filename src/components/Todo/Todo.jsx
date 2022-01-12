import React, { Component } from 'react';
import mockTasks from '../../utils/tasks'; //замокал таски в отдельном файле
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: mockTasks
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
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return updatedTask;
      }
      return task;
    });

    this.setState({tasks});
  }

  isDoneToggle(id) {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task;
    });

    this.setState({tasks});
  }

  isImportantToggle(id) {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isImportant: !task.isImportant,
        }
      }
      return task;
    });

    this.setState({tasks});
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