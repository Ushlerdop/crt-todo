import React, { Component, useState } from 'react';
import mockTasks from '../../utils/tasks'; //замокал таски в отдельном файле
import withLoader from '../../HOCs/withLoader/withLoader';
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';
import LanguageToggleButton from '../UI/buttons/LanguageToggleButton/LanguageToggleButton';
import PropTypes from 'prop-types';

function Todo() {
  const [tasks, setTasks] = useState(mockTasks);

  const addTask = (task) => {
    setTasks(prevState => {
      return [task, ...prevState];
    });
  }

  const deleteTask = (id) => {
    setTasks(prevState => {
      const tasks = prevState.filter(task => task.id !== id);
      return tasks;
    });
  }

  const updateTask = (id, updatedTask) => {
    setTasks(prevState => {
      const tasks = prevState.map(task => {
        if (task.id === id) {
          return updatedTask;
        }
        return task;
      });

      return tasks;
    });
  }

  const isTaskPropertyToggle = (id, property) => {
    setTasks(prevState => {
      const tasks = prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            [property]: !task[property],
          }
        }
        return task;
      });

      return tasks;
    });
  }

  return (
    <div className={styles.todoApp}>
      <LanguageToggleButton />
      <TodoAddForm
        addTask={addTask}
        tasks={tasks}
      />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        isTaskPropertyToggle={isTaskPropertyToggle}
      />
    </div>
  );
}

Todo.propTypes = {
  isLoading: PropTypes.bool,
};

export default withLoader(Todo);