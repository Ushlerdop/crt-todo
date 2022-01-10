import React, { Component } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTasks: this.props.tasks,
    }
    this.setCurrentTasks = this.setCurrentTasks.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tasks !== prevProps.tasks) {
      this.setState({
        currentTasks: this.props.tasks,
      })
    }
  }

  setCurrentTasks(value) {
    if (value === 'all') {
      this.setState({
        currentTasks: this.props.tasks,
      })
    } else if (value === 'important') {
      const newTasks = [...this.props.tasks].filter(item => item.isImportant === true);
      this.setState({
        currentTasks: newTasks,
      })
    } else {
      const newTasks = [...this.props.tasks].filter(item => item.isDone === value);
      this.setState({
        currentTasks: newTasks,
      })
    }
  }

  render() {
    return (
      <div>
        <TodoMods 
          setCurrentTasks={this.setCurrentTasks}
        />
        <ul className={styles.todoList}>
          {this.state.currentTasks.map(task => (
            <TodoTask
              key={task.id}
              id={task.id}
              isDone={task.isDone}
              isImportant={task.isImportant}
              title={task.title}
              description={task.description}
              editedDate={task.editedDate}
              deleteTask={this.props.deleteTask}
              isDoneToggle={this.props.isDoneToggle}
              isImportantToggle={this.props.isImportantToggle}
              updateTask={this.props.updateTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;