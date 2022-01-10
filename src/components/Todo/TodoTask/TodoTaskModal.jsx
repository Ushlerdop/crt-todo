import React, { Component } from 'react';
import Modal from '../../Modal/Modal';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import TodoUpdateForm from '../TodoForms/TodoUpdateForm/TodoUpdateForm';
import styles from './TodoTaskModal.module.scss';

class TodoTaskModal extends Component {
    
  constructor(props){
    super(props);

    this.state={
      isEditModalActive: false,
    }
    this.setEditModalActive = this.setEditModalActive.bind(this);
  }  

  setEditModalActive(value) {
    this.setState({
      isEditModalActive: value
    })
  }
  
  render() {
    return (
      <div className={styles.taskContainer}>
        <TodoUpdateForm
          active={this.state.isEditModalActive}
          setModalActive={this.setEditModalActive}
          updateTask={this.props.updateTask}
          title={this.props.title}
          description={this.props.description}
          id={this.props.id}
          isDone={this.props.isDone}
          isImportant={this.props.isImportant}
        />
        <div className={this.props.isImportant ? `${styles.task} ${styles.taskImportant}` : styles.task}>
          <div className={this.props.isDone ? `${styles.taskInfo} ${styles.taskInfoDone}` : styles.taskInfo}>
            <div onClick={this.onTitleClick} className={styles.taskTitle}>
              {this.props.title}
            </div>
            <div className={styles.taskDescription}>
              {this.props.description}
            </div>
            <div className={styles.taskDate}>
              {`Edited ${this.props.editedDate}`}
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
            <ChangeTaskButton
              setEditModalActive={this.setEditModalActive}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal(TodoTaskModal);