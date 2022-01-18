import React, { Component } from 'react';
import styles from './deleteButton.module.scss';

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

export default DeleteButton;