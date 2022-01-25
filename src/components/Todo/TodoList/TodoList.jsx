import React, { useEffect, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import { store } from '../../../store';
import { observer } from 'mobx-react-lite';

function TodoList(props) {
  const [currentTasks, setCurrentTasks] = useState(store.tasks);

  const filterCurrentTasks = (value) => {
    setCurrentTasks(() => {
      switch (value) {
        case 'all':
          return store.tasks;
          break;
        case 'active':
          return store.tasks.filter(item => item.isDone === false);
          break;
        case 'important':
          return store.tasks.filter(item => item.isImportant === true);
          break;
        case 'done':
          return store.tasks.filter(item => item.isDone === true);
          break;
        default:
          return store.tasks;
          break;
      }
    })
  }

  useEffect(() => {
    filterCurrentTasks(props.filterStatus);
  }, [store.tasks, props.filterStatus]);

  return (
    <div>
      <TodoMods
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

export default observer(TodoList);