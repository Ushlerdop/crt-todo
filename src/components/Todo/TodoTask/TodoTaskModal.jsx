import React, { Component, useContext } from 'react';
import withModal from '../../../HOCs/withModal/withModal';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import styles from './TodoTaskModal.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function TodoTaskModal(props) {
  const { language } = useContext(LanguageContext);

  const taskClassName = cx({
    task: true,
    taskImportant: props.isImportant,
    taskDone: props.isDone,
  });

  const titleTaskClassName = cx({
    taskTitle: true,
    taskTitleDone: props.isDone,
  });

  const descriptionTaskClassName = cx({
    taskDescription: true,
    taskDescriptionDone: props.isDone,
  });

  return (
    <div className={styles.taskContainer}>
      <div className={taskClassName}>
        <div className={styles.taskInfo}>
          <div className={titleTaskClassName}>
            {props.title}
          </div>
          <div className={descriptionTaskClassName}>
            {props.description}
          </div>
          <div className={styles.taskDate}>
            {`${language.task.edited} ${props.editedDate}`}
          </div>
        </div>
        <div className={styles.taskControl}>
          <DeleteButton
            deleteTask={props.deleteTask}
            id={props.id}
          />
          <DoneButton
            isTaskPropertyToggle={props.isTaskPropertyToggle}
            id={props.id}
            isDone={props.isDone}
          />
          <ImportantButton
            isTaskPropertyToggle={props.isTaskPropertyToggle}
            id={props.id}
            isImportant={props.isImportant}
          />
          <ChangeTaskButton
            setEditModalActive={props.setEditModalActive}
          />
        </div>
      </div>
    </div>
  )
}

TodoTaskModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  editedDate: PropTypes.string,
  description: PropTypes.string,
  isDone: PropTypes.bool,
  isImportant: PropTypes.bool,
  tasks: PropTypes.array,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
  isTaskPropertyToggle: PropTypes.func,
};

export default withModal(TodoTaskModal);