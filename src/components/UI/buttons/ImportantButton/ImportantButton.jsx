import React from 'react';
import styles from './ImportantButton.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ImportantButton(props) {
  const ImportantTasksClassName = cx({
    importantButton: true,
    importantButtonTrue: props.isImportant,
  });
  
  return (
    <button
      className={ImportantTasksClassName}
      onClick={() => props.isTaskPropertyToggle(props.id, 'isImportant')}
    >★</button>
  )
}

ImportantButton.propTypes = {
  id: PropTypes.number,
  isDone: PropTypes.bool,
  isTaskPropertyToggle: PropTypes.func,
}

export default ImportantButton