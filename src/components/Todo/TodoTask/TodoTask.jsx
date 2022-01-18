import React, { Component } from 'react';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import TodoUpdateForm from '../TodoForms/TodoUpdateForm/TodoUpdateForm';
import TodoTaskModal from './TodoTaskModal';
import styles from './TodoTask.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoTask extends Component {
  constructor(props) {
    super(props);
    this.state={
      isEditModalActive: false,
      isInfoModalActive: false,
    }
    this.setEditModalActive = this.setEditModalActive.bind(this);
    this.setInfoModalActive = this.setInfoModalActive.bind(this);
  }  

  setEditModalActive(value) {
    this.setState({
      isEditModalActive: value
    })
  }

  setInfoModalActive(value) {
    this.setState({
      isInfoModalActive: value
    })
  }
  
  render() {
    const taskClassName = cx({
      task: true,
      taskImportant: this.props.isImportant,
      taskDone: this.props.isDone,
    });

    const titleTaskClassName = cx({
      taskTitle: true,
      taskTitleDone: this.props.isDone,
    });

    const descriptionTaskClassName = cx({
      taskDescription: true,
      taskDescriptionDone: this.props.isDone,
    });

    return (
      <li className={styles.taskContainer}>
        <TodoUpdateForm
          active={this.state.isEditModalActive}
          setModalActive={this.setEditModalActive}
          {...this.props}
        />
        <TodoTaskModal
          active={this.state.isInfoModalActive}
          setModalActive={this.setInfoModalActive}
          {...this.props}
        />
        <div className={taskClassName}  onClick={() => this.setInfoModalActive(true)}>
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
          <div 
            className={styles.taskControl} 
            onClick={(e) => e.stopPropagation()}
          >
            <DeleteButton 
              deleteTask={this.props.deleteTask}
              id={this.props.id}
            />
            <DoneButton 
              isTaskPropertyToggle={this.props.isTaskPropertyToggle}
              id={this.props.id}
              isDone={this.props.isDone}
            />
            <ImportantButton
              isTaskPropertyToggle={this.props.isTaskPropertyToggle}
              id={this.props.id}
              isImportant={this.props.isImportant}
            />
            <ChangeTaskButton
              setEditModalActive={this.setEditModalActive}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default TodoTask;