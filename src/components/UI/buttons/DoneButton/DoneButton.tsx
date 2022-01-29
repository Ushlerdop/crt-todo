import React from 'react';
import styles from './DoneButton.module.scss';
import classNames from 'classnames/bind';
import { store } from '../../../../store';

const cx = classNames.bind(styles);

function DoneButton(props: { isDone: any; id: number }): JSX.Element {
  const DoneTasksClassName = cx({
    doneButton: true,
    doneButtonTrue: props.isDone,
  });

  return (
    <button
      className={DoneTasksClassName}
      onClick={() => store.isTaskPropertyToggle(props.id, 'isDone')}
    >✔</button>
  )
}

export default DoneButton