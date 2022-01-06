import React, { Component } from 'react';
import styles from './TodoTask.module.scss';

class TodoTask extends Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <li className={styles.taskContainer}>
        <div className={this.props.isImportant ? `${styles.task} ${styles.taskImportant}` : styles.task}>
          <div className={this.props.isDone ? `${styles.taskInfo} ${styles.taskInfoDone}` : styles.taskInfo}>
            <div className={styles.taskTitle}>
              {this.props.title}
            </div>
            <div className={styles.taskDescription}>
              {this.props.description}
            </div>
            <div className={styles.taskDate}>
              {this.props.createdDate}
            </div>
          </div>
          <div className={styles.taskControl}>
            <button className={styles.deleteButton} onClick={() => this.props.deleteTask(this.props.id)}>✖</button>
            {
              this.props.isDone
                ? <button
                  className={`${styles.doneButton} ${styles.doneButtonTrue}`}
                  onClick={() => this.props.isDoneToggle(this.props.id)}>
                  ✔</button>
                : <button
                  className={styles.doneButton}
                  onClick={() => this.props.isDoneToggle(this.props.id)}>
                  ✔</button>
            }
            {
              this.props.isImportant
                ? <button
                  className={`${styles.importantButton} ${styles.importantButtonTrue}`}
                  onClick={() => this.props.isImportantToggle(this.props.id)}
                >★</button>
                : <button
                  className={styles.importantButton}
                  onClick={() => this.props.isImportantToggle(this.props.id)}
                >★</button>
            }
          </div>
        </div>
      </li>
    );
  }
}

export default TodoTask;