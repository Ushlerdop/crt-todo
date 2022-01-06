import React, { Component } from 'react';
import styles from './ImportantButton.module.scss';

class ImportantButton extends Component {
  render() {
    {
      if (this.props.isImportant) {
        return <button
          className={`${styles.importantButton} ${styles.importantButtonTrue}`}
          onClick={() => this.props.isImportantToggle(this.props.id)}
        >★</button>
      }
      return <button
        className={styles.importantButton}
        onClick={() => this.props.isImportantToggle(this.props.id)}
      >★</button>
    }
  }
}

export default ImportantButton