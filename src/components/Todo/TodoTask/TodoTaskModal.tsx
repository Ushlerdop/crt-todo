import React, { useContext } from 'react';
import withModal from '../../../HOCs/withModal/withModal';
import ChangeTaskButton from '../../UI/buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteButton from '../../UI/buttons/DeleteButton/DeleteButton';
import DoneButton from '../../UI/buttons/DoneButton/DoneButton';
import ImportantButton from '../../UI/buttons/ImportantButton/ImportantButton';
import styles from './TodoTaskModal.module.scss';
import classNames from 'classnames/bind';
import { IContext, LanguageContext } from '../../../LanguageContext';
import { ITaskModalProps } from './interface';

const cx = classNames.bind(styles);

function TodoTaskModal(props: ITaskModalProps): JSX.Element {
  const { language } = useContext<IContext>(LanguageContext);

  return (
    <div className={styles.taskContainer}>
      <div className={cx({
        task: true,
        taskImportant: props.isImportant,
        taskDone: props.isDone,
      })}>
        <div className={styles.taskInfo}>
          <div className={cx({
            taskTitle: true,
            taskTitleDone: props.isDone,
          })}>
            {props.title}
          </div>
          <div className={cx({
            taskDescription: true,
            taskDescriptionDone: props.isDone,
          })}>
            {props.description}
          </div>
          <div className={styles.taskDate}>
            {`${language.task.edited} ${props.editedDate}`}
          </div>
        </div>
        <div className={styles.taskControl}>
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
            setEditModalActive={props.setEditModalActive}
          />
        </div>
      </div>
    </div>
  )
}

export default withModal(TodoTaskModal);