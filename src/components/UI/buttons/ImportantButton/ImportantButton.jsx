import React from 'react';
import styles from './ImportantButton.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isTaskPropertyToggle } from '../../../../store/tasksSlice';

const cx = classNames.bind(styles);

function ImportantButton(props) {
  const ImportantTasksClassName = cx({
    importantButton: true,
    importantButtonTrue: props.isImportant,
  });

  const dispatch = useDispatch();
  const clickHandler = (id, property) => dispatch(isTaskPropertyToggle({id, property}));
  
  return (
    <button
      className={ImportantTasksClassName}
      onClick={() => clickHandler(props.id, 'isImportant')}
    >★</button>
  )
}

ImportantButton.propTypes = {
  id: PropTypes.number,
  isDone: PropTypes.bool,
  isTaskPropertyToggle: PropTypes.func,
}

export default ImportantButton