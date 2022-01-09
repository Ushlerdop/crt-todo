import React, { Component } from 'react';
import styles from './TodoMods.module.scss';

class TodoMods extends Component {
  render() {
    return (
      <div className={styles.todoMods}>
        <div className={styles.todoModsContainer}>
          <button onClick={() => this.props.setCurrentTasks('all')}>All tasks</button>
          <button onClick={() => this.props.setCurrentTasks(false)}>Active tasks</button>
          <button onClick={() => this.props.setCurrentTasks('important')}>Important tasks</button>
          <button onClick={() => this.props.setCurrentTasks(true)}>Done tasks</button>
        </div>
      </div>
    );
  }
}

export default TodoMods;