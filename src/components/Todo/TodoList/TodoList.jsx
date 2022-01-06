import React, { Component } from 'react';
import styles from './TodoList.module.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <ul className={styles.todoList}>
        {this.props.tasks.map(task => (
          <li key={task.id} className={styles.taskContainer}>
            <div className={task.isImportant ? `${styles.task} ${styles.taskImportant}` : styles.task}>
              <div className={task.isDone ? `${styles.taskInfo} ${styles.taskInfoDone}` : styles.taskInfo}>
                <div className={styles.taskTitle}>
                  {task.title}
                </div>
                <div className={styles.taskDescription}>
                  {task.description}
                </div>
                <div className={styles.taskDate}>
                  {task.createdDate}
                </div>
              </div>
              <div className={styles.taskControl}>
                <button className={styles.deleteButton} onClick={() => this.props.deleteTask(task.id)}>X</button>
                {
                  task.isDone
                  ? <button
                      className={`${styles.doneButton} ${styles.doneButtonTrue}`} 
                      onClick={() => this.props.isDoneToggle(task.id)}>
                    ✓</button>
                  : <button 
                      className={styles.doneButton} 
                      onClick={() => this.props.isDoneToggle(task.id)}>
                    ✓</button>
                }
                {
                  task.isImportant
                  ? <button 
                      className={`${styles.importantButton} ${styles.importantButtonTrue}`}
                      onClick={() => this.props.isImportantToggle(task.id)}
                    >★</button>
                  : <button 
                      className={styles.importantButton}
                      onClick={() => this.props.isImportantToggle(task.id)}
                    >★</button>
                }
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;