import React from 'react';
import withLoader from '../../HOCs/withLoader/withLoader';
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';
import LanguageToggleButton from '../UI/buttons/LanguageToggleButton/LanguageToggleButton';
import { useParams } from 'react-router-dom';

function Todo() {
  const filterStatus = useParams()['*'];

  return (
    <div className={styles.todoApp}>
      <LanguageToggleButton />
      <TodoAddForm
      />
      <TodoList
        filterStatus={filterStatus}
      />
    </div>
  );
}

export default withLoader(Todo);