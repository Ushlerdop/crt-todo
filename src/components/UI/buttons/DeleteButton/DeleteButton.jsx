import React from 'react';
import styles from './deleteButton.module.scss';

function DeleteButton(props) {
  return (
    <button
      className={styles.deleteButton}
      onClick={() => props.deleteTask(props.id)}
    >
      ✖
    </button>
  )
}

export default DeleteButton;