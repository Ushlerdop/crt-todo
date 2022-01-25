import React from 'react';
import styles from './DoneButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DoneButton(props) {
  const DoneTasksClassName = cx({
    doneButton: true,
    doneButtonTrue: props.isDone,
  });

  return (
    <button
      className={DoneTasksClassName}
      onClick={() => props.isTaskPropertyToggle(props.id, 'isDone')}
    >✔</button>
  )
}

export default DoneButton