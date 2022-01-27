import React from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import { store } from '../../../store';
import { observer } from 'mobx-react-lite';

function TodoList(props) {

  return (
    <div>
      <TodoMods
      />
      <ul className={styles.todoList}>
        {store.filteredCurrentTasks.map(task => (
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