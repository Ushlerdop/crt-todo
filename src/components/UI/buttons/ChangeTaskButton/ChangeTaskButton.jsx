import React from 'react';
import styles from './ChangeTaskButton.module.scss';

function ChangeTaskButton(props) {
  return (
    <button
      className={styles.changeButton}
      onClick={() => props.setEditModalActive(true)}
    >✎</button>
  )
}

export default ChangeTaskButton