import React, { useContext, useEffect, useState } from 'react';
import styles from './TodoMods.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TodoMods(props) {
  const { language } = useContext(LanguageContext);

  const onClickHandler = (currentTaskValue) => {
    props.filterCurrentTasks(currentTaskValue);
  }

  const AllTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: props.activeFilter === 'all',
  });
  const ActiveTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: props.activeFilter === 'active',
  });
  const ImportantTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: props.activeFilter === 'important',
  });
  const DoneTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: props.activeFilter === 'done',
  });

  return (
    <div className={styles.todoMods}>
      <div className={styles.todoModsContainer}>
        <button
          id={1}
          onClick={() => onClickHandler('all')}
          className={AllTasksClassName}
        >
          <Link to={'./all'} className={styles.link}>{language.tasksMods.allTasks}</Link>
        </button>


        <button
          id={2}
          onClick={() => onClickHandler('active')}
          className={ActiveTasksClassName}
        >
          <Link to={'./active'} className={styles.link}>{language.tasksMods.activeTasks}</Link>
        </button>

        <button
          id={3}
          onClick={() => onClickHandler('important')}
          className={ImportantTasksClassName}
        >
          <Link to={'./important'} className={styles.link}>{language.tasksMods.importantTasks}</Link>
        </button>

        <button
          id={4}
          onClick={() => onClickHandler('done')}
          className={DoneTasksClassName}
        >
          <Link to={'./done'} className={styles.link}>{language.tasksMods.doneTasks}</Link>
        </button>
      </div>
    </div>
  )
}

TodoMods.propTypes = {
  filterCurrentTasks: PropTypes.func,
};

export default TodoMods;