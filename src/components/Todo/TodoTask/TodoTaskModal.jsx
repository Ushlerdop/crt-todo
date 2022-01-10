import React, { Component } from 'react';
import Modal from '../../Modal/Modal';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import TodoUpdateForm from '../TodoForms/TodoUpdateForm/TodoUpdateForm';
import styles from './TodoTaskModal.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

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
    let taskClassName = cx({
      task: true,
      taskImportant: this.props.isImportant,
      taskDone: this.props.isDone,
    });

    let titleTaskClassName = cx({
      taskTitle: true,
      taskTitleDone: this.props.isDone,
    });

    let descriptionTaskClassName = cx({
      taskDescription: true,
      taskDescriptionDone: this.props.isDone,
    });
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
          tasks={this.props.tasks}
        />
        <div className={taskClassName}>
          <div className={styles.taskInfo}>
            <div className={titleTaskClassName}>
              {this.props.title}
            </div>
            <div className={descriptionTaskClassName}>
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