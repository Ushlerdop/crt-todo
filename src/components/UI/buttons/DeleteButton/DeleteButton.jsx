import React from 'react';
import styles from './deleteButton.module.scss';
import PropTypes from 'prop-types';

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

DeleteButton.propTypes = {
  id: PropTypes.number,
  deleteTask: PropTypes.func,
}

export default DeleteButton;