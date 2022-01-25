import React, { useContext } from 'react';
import styles from './TodoMods.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
import { Link } from 'react-router-dom';
import { store } from '../../../store';

const cx = classNames.bind(styles);

function TodoMods(props) {
  const { language } = useContext(LanguageContext);

  const AllTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: store.tasksFilterStatus === 'all',
  });
  const ActiveTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: store.tasksFilterStatus === 'active',
  });
  const ImportantTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: store.tasksFilterStatus === 'important',
  });
  const DoneTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: store.tasksFilterStatus === 'done',
  });

  return (
    <div className={styles.todoMods}>
      <div className={styles.todoModsContainer}>
        <button className={AllTasksClassName}>
          <Link to={'./all'} className={styles.link}>{language.tasksMods.allTasks}</Link>
        </button>

        <button className={ActiveTasksClassName}>
          <Link to={'./active'} className={styles.link}>{language.tasksMods.activeTasks}</Link>
        </button>

        <button className={ImportantTasksClassName}>
          <Link to={'./important'} className={styles.link}>{language.tasksMods.importantTasks}</Link>
        </button>

        <button className={DoneTasksClassName}>
          <Link to={'./done'} className={styles.link}>{language.tasksMods.doneTasks}</Link>
        </button>
      </div>
    </div>
  )
}

export default TodoMods;