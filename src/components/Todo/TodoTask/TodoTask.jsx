import React, { Component } from 'react';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
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
            <DeleteButton 
              deleteTask={this.props.deleteTask}
              id={this.props.id}
            />
            <DoneButton 
              isDoneToggle={this.props.isDoneToggle}
              id={this.props.id}
              isDone={this.props.isDone}
            />
            <ImportantButton
              isImportantToggle={this.props.isImportantToggle}
              id={this.props.id}
              isImportant={this.props.isImportant}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default TodoTask;