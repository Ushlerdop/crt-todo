import React, { Component } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import styles from './TodoList.module.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <ul className={styles.todoList}>
        {this.props.tasks.map(task => (
          <TodoTask
            key={task.id}
            id={task.id}
            isDone={task.isDone}
            isImportant={task.isImportant}
            title={task.title}
            description={task.description}
            createdDate={task.createdDate}
            deleteTask={this.props.deleteTask}
            isDoneToggle={this.props.isDoneToggle}
            isImportantToggle={this.props.isImportantToggle}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;