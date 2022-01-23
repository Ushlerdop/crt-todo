import React, { useEffect, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import TodoMods from '../TodoMods/TodoMods';
import styles from './TodoList.module.scss';
import PropTypes from 'prop-types';

function TodoList(props) {

  const [currentTasks, setCurrentTasks] = useState(props.tasks);
  

  useEffect(() => {
    setCurrentTasks(props.tasks)
  }, [props.tasks]);

  const filterCurrentTasks = (value) => {
    setCurrentTasks(() => {
      const condition = value === "important" 
        ? { property: "isImportant", comparator: true } 
        : { property: "isDone", comparator: value}
  
      const filteredTasks = value === 'all' 
        ? props.tasks
        : props.tasks.filter(item => item[condition.property] === condition.comparator)
  
      return filteredTasks
    })
  }

  return (
    <div>
      <TodoMods 
        filterCurrentTasks={filterCurrentTasks}
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