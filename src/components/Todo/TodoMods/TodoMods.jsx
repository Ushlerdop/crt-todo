import React, { Component } from 'react';
import styles from './TodoMods.module.scss';

class TodoMods extends Component {
  constructor(props) {
    super(props);
    this.state={      
      activeTaskFilterId: 1,
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.setActiveTaskFilterId = this.setActiveTaskFilterId.bind(this);
  }

  onClickHandler(currentTaskValue, activeTaskId) {
    this.props.setCurrentTasks(currentTaskValue);
    this.setActiveTaskFilterId(activeTaskId);
  }

  setActiveTaskFilterId(id) {
    this.setState({
      activeTaskFilterId: id,
    })
  }

  render() {
    return (
      <div className={styles.todoMods}>
        <div className={styles.todoModsContainer}>
          <button 
            id={1} 
            onClick={() => this.onClickHandler('all', 1)}
            className={this.state.activeTaskFilterId === 1 
              ? `${styles.todoModsButtonActive} ${styles.todoModsButton}` 
              : styles.todoModsButton}
          >
            All tasks
          </button>

          <button 
           id={2}
           onClick={() => this.onClickHandler(false, 2)}
           className={this.state.activeTaskFilterId === 2 
            ? `${styles.todoModsButtonActive} ${styles.todoModsButton}` 
            : styles.todoModsButton}
          >
            Active tasks
          </button>

          <button 
            id={3} 
            onClick={() => this.onClickHandler('important', 3)}
            className={this.state.activeTaskFilterId === 3 
              ? `${styles.todoModsButtonActive} ${styles.todoModsButton}` 
              : styles.todoModsButton}
          >
            Important tasks
          </button>

          <button 
            id={4} 
            onClick={() => this.onClickHandler(true, 4)}
            className={this.state.activeTaskFilterId === 4 
              ? `${styles.todoModsButtonActive} ${styles.todoModsButton}` 
              : styles.todoModsButton}
          >
            Done tasks
          </button>
        </div>
      </div>
    );
  }
}

export default TodoMods;