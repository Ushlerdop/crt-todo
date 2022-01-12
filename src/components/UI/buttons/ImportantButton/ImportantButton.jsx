import React, { Component } from 'react';
import styles from './ImportantButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ImportantButton extends Component {
  render() {
    const ImportantTasksClassName = cx({
      importantButton: true,
      importantButtonTrue: this.props.isImportant,
    });
    
    return (
      <button
        className={ImportantTasksClassName}
        onClick={() => this.props.isImportantToggle(this.props.id)}
      >★</button>
    )
  }
}

export default ImportantButton