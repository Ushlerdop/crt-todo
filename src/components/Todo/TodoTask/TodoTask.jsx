import React, { Component, useContext, useEffect, useState } from 'react';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import TodoUpdateForm from '../TodoForms/TodoUpdateForm/TodoUpdateForm';
import TodoTaskModal from './TodoTaskModal';
import styles from './TodoTask.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function TodoTask(props) {
  const [isEditModalActive, setIsEditModalActive] = useState(false);
  const [isInfoModalActive, setIsInfoModalActive] = useState(false);

  const { language } = useContext(LanguageContext);

  const setEditModalActive = (value) => {
    setIsEditModalActive(value);
  }

  const setInfoModalActive = (value) => {
    setIsInfoModalActive(value);
  }

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
    <li className={styles.taskContainer}>
      <TodoUpdateForm
        active={isEditModalActive}
        setModalActive={setEditModalActive}
        {...props}
      />
      <TodoTaskModal
        active={isInfoModalActive}
        setModalActive={setInfoModalActive}
        {...props}
      />
      <div className={taskClassName} onClick={() => setInfoModalActive(true)}>
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
        <div
          className={styles.taskControl}
          onClick={(e) => e.stopPropagation()}
        >
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
            setEditModalActive={setEditModalActive}
          />
        </div>
      </div>
    </li>
  )
}

TodoTask.propTypes = {
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

export default TodoTask;