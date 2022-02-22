import React, { useContext } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import { store } from '../../../store';
import { observer } from 'mobx-react-lite';
import { IContext, LanguageContext } from '../../../LanguageContext';

function TodoList(): JSX.Element {
  const { language } = useContext<IContext>(LanguageContext);

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
        {
          store.filteredCurrentTasks.length === 0 
          && 
          <div className={styles.emptyListMessage}>{language.emptyTaskListMessage}</div>
        }
      </ul>
    </div>
  );
}

export default observer(TodoList);