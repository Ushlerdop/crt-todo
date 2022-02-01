import React from 'react';
import styles from './ImportantButton.module.scss';
import classNames from 'classnames/bind';
import { store } from '../../../../store';

const cx = classNames.bind(styles);

function ImportantButton(props: { isImportant: any; id: number }): JSX.Element {
  return (
    <button
      className={cx({
        importantButton: true,
        importantButtonTrue: props.isImportant,
      })}
      onClick={() => store.isTaskPropertyToggle(props.id, 'isImportant')}
    >★</button>
  )
}

export default ImportantButton