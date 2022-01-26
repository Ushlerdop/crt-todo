import React, { useEffect } from 'react';
import withLoader from '../../HOCs/withLoader/withLoader';
import styles from './Todo.module.scss';
import TodoAddForm from './TodoForms/TodoAddForm/TodoAddForm';
import TodoList from './TodoList/TodoList';
import LanguageToggleButton from '../UI/buttons/LanguageToggleButton/LanguageToggleButton';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { store } from '../../store';

function Todo() {
  const filterStatus = useParams()['*'];  
  useEffect(() => {
    store.setCurrentFilterStatus(filterStatus);
  }, [filterStatus]);

  return (
    <div className={styles.todoApp}>
      <LanguageToggleButton />
      <TodoAddForm
      />
      <TodoList
      />
    </div>
  );
}

export default withLoader(observer(Todo));