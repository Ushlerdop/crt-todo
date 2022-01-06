import React, { Component } from 'react';
import styles from './DoneButton.module.scss';

class DoneButton extends Component {
  render() {
    if (this.props.isDone) {
      return <button
        className={`${styles.doneButton} ${styles.doneButtonTrue}`}
        onClick={() => this.props.isDoneToggle(this.props.id)}>
        ✔</button>
    }
    return <button
      className={styles.doneButton}
      onClick={() => this.props.isDoneToggle(this.props.id)}>
      ✔</button>
  }
}

export default DoneButton