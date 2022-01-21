import React, { useContext, useState } from 'react';
import styles from './TodoMods.module.scss';
import classNames from 'classnames/bind';
import { LanguageContext } from '../../../LanguageContext';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function TodoMods(props) {
  const [activeTaskFilterId, setActiveTaskFilterId] = useState(1);

  const { language } = useContext(LanguageContext);

  const onClickHandler = (currentTaskValue, activeTaskId) => {
    props.filterCurrentTasks(currentTaskValue);
    setActiveTaskFilterId(activeTaskId);
  }

  const AllTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: activeTaskFilterId === 1,
  });
  const ActiveTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: activeTaskFilterId === 2,
  });
  const ImportantTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: activeTaskFilterId === 3,
  });
  const DoneTasksClassName = cx({
    todoModsButton: true,
    todoModsButtonActive: activeTaskFilterId === 4,
  });

  return (
    <div className={styles.todoMods}>
      <div className={styles.todoModsContainer}>
        <button
          id={1}
          onClick={() => onClickHandler('all', 1)}
          className={AllTasksClassName}
        >
          {language.tasksMods.allTasks}
        </button>

        <button
          id={2}
          onClick={() => onClickHandler(false, 2)}
          className={ActiveTasksClassName}
        >
          {language.tasksMods.activeTasks}
        </button>

        <button
          id={3}
          onClick={() => onClickHandler('important', 3)}
          className={ImportantTasksClassName}
        >
          {language.tasksMods.importantTasks}
        </button>

        <button
          id={4}
          onClick={() => onClickHandler(true, 4)}
          className={DoneTasksClassName}
        >
          {language.tasksMods.doneTasks}
        </button>
      </div>
    </div>
  )
}

TodoMods.propTypes = {
  filterCurrentTasks: PropTypes.func,
};

export default TodoMods;