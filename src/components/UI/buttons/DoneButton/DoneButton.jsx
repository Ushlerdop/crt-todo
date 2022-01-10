import React, { Component } from 'react';
import styles from './DoneButton.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class DoneButton extends Component {
  render() {
    let DoneTasksClassName = cx({
      doneButton: true,
      doneButtonTrue: this.props.isDone,
    });
    return <button
      className={DoneTasksClassName}
      onClick={() => this.props.isDoneToggle(this.props.id)}>
      ✔</button>
  }
}

export default DoneButton