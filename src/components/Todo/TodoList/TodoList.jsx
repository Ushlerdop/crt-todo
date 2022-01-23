import React, { useEffect, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function TodoList(props) {
  const tasks = useSelector(state => state.todo.tasks);
  const [currentTasks, setCurrentTasks] = useState(tasks);

  const filterCurrentTasks = (value) => {
    setCurrentTasks(() => {
      switch (value) {
        case 'all':
          return tasks;
          break;
        case 'active':
          return tasks.filter(item => item.isDone === false);
          break;
        case 'important':
          return tasks.filter(item => item.isImportant === true);
          break;
        case 'done':
          return tasks.filter(item => item.isDone === true);
          break;
        default:
          return tasks;
          break;
      }
    })
  }

  useEffect(() => {
    filterCurrentTasks(props.filterStatus)
  }, [tasks]);

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