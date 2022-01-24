import React, { useEffect, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
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
  }, [tasks, props.filterStatus]);

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

export default TodoList;