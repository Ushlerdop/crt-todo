import React, { Component } from 'react';
import styles from './ChangeTaskButton.module.scss';

class ChangeTaskButton extends Component {
  render() {
    return <button
      className={styles.changeButton}
      onClick={() => this.props.setEditModalActive(true)}
    >✎</button>
  }
}

export default ChangeTaskButton