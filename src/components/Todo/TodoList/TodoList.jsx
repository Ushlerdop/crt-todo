import React, { useEffect, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import PropTypes from 'prop-types';

function TodoList(props) {

  const [currentTasks, setCurrentTasks] = useState(props.tasks);

  const filterCurrentTasks = (value) => {
    setCurrentTasks(() => {
      switch (value) {
        case 'all':
          return props.tasks;
          break;
        case 'active':
          return props.tasks.filter(item => item.isDone === false);
          break;
        case 'important':
          return props.tasks.filter(item => item.isImportant === true);
          break;
        case 'done':
          return props.tasks.filter(item => item.isDone === true);
          break;
        default:
          return props.tasks;
          break;
      }
    })
  }

  useEffect(() => {
    filterCurrentTasks(props.filterStatus)
  }, [props.tasks]);

  return (
    <div>
      <TodoMods 
        filterCurrentTasks={filterCurrentTasks}
        activeFilter={props.filterStatus}
      />
      <ul className={styles.todoList}>
        {currentTasks.map(task => (
          <TodoTask
            key={task.id}
            {...task}
            {...props}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func,
  isTaskPropertyToggle: PropTypes.func,
};

export default TodoList;