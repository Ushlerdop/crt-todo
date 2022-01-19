import React, { Component } from 'react';
import styles from './deleteButton.module.scss';
import PropTypes from 'prop-types';

class DeleteButton extends Component {
  render() {
    return (
      <button 
        className={styles.deleteButton} 
        onClick={() => this.props.deleteTask(this.props.id)}
      >
        ✖
      </button>
    );
  }
}

DeleteButton.propTypes = {
  id: PropTypes.number,
  deleteTask: PropTypes.func,
}

export default DeleteButton;