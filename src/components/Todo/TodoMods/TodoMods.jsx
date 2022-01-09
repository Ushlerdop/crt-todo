import React, { Component } from 'react';
import styles from './TodoMods.module.scss';

class TodoMods extends Component {
  render() {
    return (
      <div className={styles.todoMods}>
        <div className={styles.todoModsContainer}>
          <button>All tasks</button>
          <button>Active tasks</button>
          <button>Important tasks</button>
          <button>Done tasks</button>
        </div>
      </div>
    );
  }
}

export default TodoMods;