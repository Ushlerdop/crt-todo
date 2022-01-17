import React, { Component } from 'react';
import mockTasks from '../../utils/tasks'; //замокал таски в отдельном файле
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton';
import WithLoader from '../WithLoader/WithLoader';
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: mockTasks,
      isAddFormLoading: false,
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.isTaskPropertyToggle = this.isTaskPropertyToggle.bind(this);
    this.setAddFormLoading = this.setAddFormLoading.bind(this);
  }

  addTask(task) {
    this.setState(prevState => ({
      tasks: [task, ...prevState.tasks]
    }))
  }

  deleteTask(id) {
    this.setState(prevState => {
      const tasks = prevState.tasks.filter(task => task.id !== id);

      return {tasks}
    })
  }

  updateTask(id, updatedTask) {
    this.setState(prevState => {
      const tasks = prevState.tasks.map(task => {
        if (task.id === id) {
          return updatedTask;
        }
        return task;
      });

      return {tasks}
    });
  }

  isTaskPropertyToggle(id, property) {
    this.setState(prevState => {
      const tasks = prevState.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            [property]: !task[property],
          }
        }
        return task;
      });

      return {tasks}
    });
  }

  setAddFormLoading(value) {
    this.setState({
      isAddFormLoading: value
    })
  }

  render() {
    return (
      <div className={styles.todoApp}>
        <LanguageToggleButton />
        <TodoAddForm 
          addTask={this.addTask}
          tasks={this.state.tasks}
          isLoading={this.state.isAddFormLoading}
          setAddFormLoading={this.setAddFormLoading}
        />
        <TodoList
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          isTaskPropertyToggle={this.isTaskPropertyToggle}
        />
      </div>
    );
  }
}

export default WithLoader(Todo);