import React, { useContext } from 'react';
import styles from './TodoMods.module.scss';
import classNames from 'classnames/bind';
import { IContext, LanguageContext } from '../../../LanguageContext';
import { Link } from 'react-router-dom';
import { store } from '../../../store';

const cx = classNames.bind(styles);

function TodoMods(): JSX.Element {
  const { language } = useContext<IContext>(LanguageContext);
  return (
    <div className={styles.todoMods}>
      <div className={styles.todoModsContainer}>
        <button className={cx({
          todoModsButton: true,
          todoModsButtonActive: store.currentFilterStatus === store.filterStatusesList.ALL,
        })}>
          <Link to={'./all'} className={styles.link}>{language.tasksMods.allTasks}</Link>
        </button>

        <button className={cx({
          todoModsButton: true,
          todoModsButtonActive: store.currentFilterStatus === store.filterStatusesList.ACTIVE,
        })}>
          <Link to={'./active'} className={styles.link}>{language.tasksMods.activeTasks}</Link>
        </button>

        <button className={cx({
          todoModsButton: true,
          todoModsButtonActive: store.currentFilterStatus === store.filterStatusesList.IMPORTANT,
        })}>
          <Link to={'./important'} className={styles.link}>{language.tasksMods.importantTasks}</Link>
        </button>

        <button className={cx({
          todoModsButton: true,
          todoModsButtonActive: store.currentFilterStatus === store.filterStatusesList.DONE,
        })}>
          <Link to={'./done'} className={styles.link}>{language.tasksMods.doneTasks}</Link>
        </button>
      </div>
    </div>
  )
}

export default TodoMods;