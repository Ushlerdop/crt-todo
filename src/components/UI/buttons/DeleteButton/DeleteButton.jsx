import React from 'react';
import styles from './deleteButton.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../store/tasksSlice';

function DeleteButton(props) {
  const dispatch = useDispatch();
  const clickHandler = (id) => dispatch(deleteTask({id}));

  return (
    <button
      className={styles.deleteButton}
      onClick={() => clickHandler(props.id)}
    >
      ✖
    </button>
  )
}

DeleteButton.propTypes = {
  id: PropTypes.number,
  deleteTask: PropTypes.func,
}

export default DeleteButton;