import React from 'react';
import styles from './ImportantButton.module.scss';
import classNames from 'classnames/bind';
import { store } from '../../../../store';

const cx = classNames.bind(styles);

function ImportantButton(props: { isImportant: any; id: number }) {
  const ImportantTasksClassName = cx({
    importantButton: true,
    importantButtonTrue: props.isImportant,
  });
  
  return (
    <button
      className={ImportantTasksClassName}
      onClick={() => store.isTaskPropertyToggle(props.id, 'isImportant')}
    >★</button>
  )
}

export default ImportantButton