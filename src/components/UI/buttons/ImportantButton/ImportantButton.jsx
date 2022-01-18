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
        onClick={() => this.props.isTaskPropertyToggle(this.props.id, 'isImportant')}
      >★</button>
    )
  }
}

export default ImportantButton