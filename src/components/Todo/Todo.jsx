import React from 'react';
import withLoader from '../../HOCs/withLoader/withLoader';
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';
import LanguageToggleButton from '../UI/buttons/LanguageToggleButton/LanguageToggleButton';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/tasksSlice';

function Todo() {
  const dispatch = useDispatch();
  const addTask = (task) => dispatch(addTodo(task));

  const filterStatus = useParams()['*'];

  return (
    <div className={styles.todoApp}>
      <LanguageToggleButton />
      <TodoAddForm
        addTask={addTask}
      />
      <TodoList
        filterStatus={filterStatus}
      />
    </div>
  );
}

Todo.propTypes = {
  isLoading: PropTypes.bool,
};

export default withLoader(Todo);