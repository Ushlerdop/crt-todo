import React, { Component } from 'react';
import styles from './DoneButton.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

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

DoneButton.propTypes = {
  id: PropTypes.number,
  isDone: PropTypes.bool,
  isTaskPropertyToggle: PropTypes.func,
}

export default DoneButton