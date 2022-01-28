import React, { useContext, useState } from 'react';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import TodoUpdateForm from '../TodoForms/TodoUpdateForm/TodoUpdateForm';
import TodoTaskModal from './TodoTaskModal';
import styles from './TodoTask.module.scss';
import classNames from 'classnames/bind';
import { IContext, LanguageContext } from '../../../LanguageContext';
import { ITaskObject } from '../../../store/interface';

const cx = classNames.bind(styles);

function TodoTask(props: ITaskObject): JSX.Element {
  const [isEditModalActive, setIsEditModalActive] = useState<boolean>(false);
  const [isInfoModalActive, setIsInfoModalActive] = useState<boolean>(false);

  const { language } = useContext<IContext>(LanguageContext);

  const setEditModalActive = (value: React.SetStateAction<boolean>): void => {
    setIsEditModalActive(value);
  }

  const setInfoModalActive = (value: React.SetStateAction<boolean>): void => {
    setIsInfoModalActive(value);
  }

  const taskClassName = cx({
    task: true,
    taskImportant: props.isImportant,
    taskDone: props.isDone,
  });

  const titleTaskClassName = cx({
    taskTitle: true,
    taskTitleDone: props.isDone,
  });

  const descriptionTaskClassName = cx({
    taskDescription: true,
    taskDescriptionDone: props.isDone,
  });

  return (
    <li className={styles.taskContainer}>
      <TodoTaskModal
        active={isInfoModalActive}
        setModalActive={setInfoModalActive}
        setEditModalActive={setEditModalActive}
        {...props}
      />
      <TodoUpdateForm
        active={isEditModalActive}
        setModalActive={setEditModalActive}
        {...props}
      />
      <div className={taskClassName} onClick={() => setInfoModalActive(true)}>
        <div className={styles.taskInfo}>
          <div className={titleTaskClassName}>
            {props.title}
          </div>
          <div className={descriptionTaskClassName}>
            {props.description}
          </div>
          <div className={styles.taskDate}>
            {`${language.task.edited} ${props.editedDate}`}
          </div>
        </div>
        <div
          className={styles.taskControl}
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteButton
            id={props.id}
          />
          <DoneButton
            id={props.id}
            isDone={props.isDone}
          />
          <ImportantButton
            id={props.id}
            isImportant={props.isImportant}
          />
          <ChangeTaskButton
            setEditModalActive={setEditModalActive}
          />
        </div>
      </div>
    </li>
  )
}

export default TodoTask;