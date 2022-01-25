import React, { useEffect, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';

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
  }, [props.tasks, props.filterStatus]);

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

export default TodoList;