import React, { useContext, useEffect, useState } from 'react';
import styles from './TodoMods.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
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
          onClick={() => onClickHandler('all')}
          className={AllTasksClassName}
        >
          <Link to={'./all'} className={styles.link}>{language.tasksMods.allTasks}</Link>
        </button>


        <button
          onClick={() => onClickHandler('active')}
          className={ActiveTasksClassName}
        >
          <Link to={'./active'} className={styles.link}>{language.tasksMods.activeTasks}</Link>
        </button>

        <button
          onClick={() => onClickHandler('important')}
          className={ImportantTasksClassName}
        >
          <Link to={'./important'} className={styles.link}>{language.tasksMods.importantTasks}</Link>
        </button>

        <button
          onClick={() => onClickHandler('done')}
          className={DoneTasksClassName}
        >
          <Link to={'./done'} className={styles.link}>{language.tasksMods.doneTasks}</Link>
        </button>
      </div>
    </div>
  )
}

export default TodoMods;