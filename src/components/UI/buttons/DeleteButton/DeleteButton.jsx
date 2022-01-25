import React from 'react';
import { store } from '../../../../store';
import styles from './deleteButton.module.scss';

function DeleteButton(props) {
  return (
    <button
      className={styles.deleteButton}
      onClick={() => store.deleteTask(props.id)}
    >
      ✖
    </button>
  )
}

export default DeleteButton;