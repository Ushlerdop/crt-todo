import React, { Component } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import PropTypes from 'prop-types';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTasks: this.props.tasks,
      activeTasksFilter: 'all',
    }
    this.setCurrentTasks = this.setCurrentTasks.bind(this);
  }

  componentDidUpdate(prevProps, _) {
    if (this.props.tasks !== prevProps.tasks) {
      this.setState({
        currentTasks: this.props.tasks,
      })
    }
  }

  setCurrentTasks(value) {
    this.setState((_, prevProps) => {
      const condition = value === "important" 
        ? { property: "isImportant", comparator: true } 
        : { property: "isDone", comparator: value}
  
      const tasks = value === 'all' 
        ? prevProps.tasks 
        : (
          prevProps.tasks.filter(item => item[condition.property] === condition.comparator)  
      )
  
      return {currentTasks: tasks}
    })
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
              {...task}
              {...this.props}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func,
  isTaskPropertyToggle: PropTypes.func,
};

export default TodoList;