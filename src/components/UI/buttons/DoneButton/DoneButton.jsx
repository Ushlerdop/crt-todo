import React from 'react';
import styles from './DoneButton.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isTaskPropertyToggle } from '../../../../store/tasksSlice';

const cx = classNames.bind(styles);

function DoneButton(props) {
  const DoneTasksClassName = cx({
    doneButton: true,
    doneButtonTrue: props.isDone,
  });

  const dispatch = useDispatch();
  const clickHandler = (id, property) => dispatch(isTaskPropertyToggle({id, property}));

  return (
    <button
      className={DoneTasksClassName}
      onClick={() => clickHandler(props.id, 'isDone')}
    >✔</button>
  )
}

DoneButton.propTypes = {
  id: PropTypes.number,
  isDone: PropTypes.bool,
  isTaskPropertyToggle: PropTypes.func,
}

export default DoneButton