import React from 'react';
import styles from './ChangeTaskButton.module.scss';
import PropTypes from 'prop-types';

function ChangeTaskButton(props) {
  return (
    <button
      className={styles.changeButton}
      onClick={() => props.setEditModalActive(true)}
    >✎</button>
  )
}

ChangeTaskButton.propTypes = {
  setEditModalActive: PropTypes.func,
}

export default ChangeTaskButton