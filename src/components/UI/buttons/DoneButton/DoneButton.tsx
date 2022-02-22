import React from 'react';
import styles from './DoneButton.module.scss';
import classNames from 'classnames/bind';
import { store } from '../../../../store';

const cx = classNames.bind(styles);

function DoneButton(props: { isDone: boolean; id: number }): JSX.Element {
  return (
    <button
      className={cx({
        doneButton: true,
        doneButtonTrue: props.isDone,
      })}
      onClick={() => store.isTaskPropertyToggle(props.id, 'isDone')}
    >✔</button>
  )
}

export default DoneButton