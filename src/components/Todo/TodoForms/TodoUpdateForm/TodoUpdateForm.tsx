import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import withModal from '../../../../HOCs/withModal/withModal';
import styles from '../TodoForm.module.scss';
import { store } from '../../../../store';
import { ITaskObject } from '../../../../store/interface';
import { IUpdateFormProps } from './interface';

function TodoUpdateForm(props: IUpdateFormProps): JSX.Element {  
  const textArea = useRef<HTMLTextAreaElement>(null);
  const textInput = useRef<HTMLInputElement>(null);

  const [titleText, setTitleText] = useState<string>(props.title);
  const [descriptionText, setDescriptionText] = useState<string>(props.description);

  const { language } = useContext<IContext>(LanguageContext);

  useLayoutEffect(() => {
    textArea.current.style.height = `${Math.min(textArea.current.scrollHeight, 300)}px`;
  }, []);

  useEffect(() => {
    setTitleText(props.title);
    setDescriptionText(props.description);
  }, [props.active]);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleText(e.target.value);
  }

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescriptionText(e.target.value);
    textArea.current.style.height = 'inherit';
    textArea.current.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const maxTextInputLength: number = 500;
    const maxTextAreaLength: number = 3000;

    const titleValue: string = e.target[0].value;
    const descriptionValue: string = e.target[1].value;

    //проверка на существование задачи с таким же тайтлом, но другим ID (иначе будет конфликт задачи с самой собой)
    if (store.tasks.some(task => task.title.toLowerCase() === titleValue.toLowerCase() && task.id !== props.id)) {
      return alert(`You already have a task with this Title`);
    }

    if (!(descriptionValue && titleValue)) {
      return alert('You have to text something in title and description');
    }

    if (titleValue.length <= maxTextInputLength && descriptionValue.length <= maxTextAreaLength) {
      const title: string = titleValue;
      const description: string = descriptionValue;
      const isDone: boolean = props.isDone;
      const isImportant: boolean = props.isImportant;
      const editedDate: string = `${new Date().toLocaleDateString()}`;
      const id: number = props.id;
      const task: ITaskObject = {
        title,
        description,
        isDone,
        isImportant,
        editedDate,
        id,
      }
      store.updateTask(props.id, task);
      props.setModalActive(false);
    } else {
      alert(`You can write no more than ${maxTextInputLength} characters in Title and ${maxTextAreaLength} in Description sections`);
    }
  }

  return (
    <div className={styles.todoFormContainerUpdateForm}>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <div className={styles.titleInputSection}>
          <div>
            <label htmlFor="title">{language.form.title}</label>
          </div>
          <input
            name='title'
            id='title'
            value={titleText}
            onChange={onTitleChange}
            className={styles.todoFormInput}
            ref={textInput}
          />
        </div>
        <div className={styles.descriptionInputSection}>
          <div>
            <label htmlFor="description">{language.form.note}</label>
          </div>
          <textarea
            name='description'
            id='description'
            value={descriptionText}
            onChange={onDescriptionChange}
            className={styles.todoFormTextarea}
            ref={textArea}
          />
        </div>
        <button className={styles.addButton}>{language.form.updateButton}</button>
      </form>
    </div>
  )
}

export default withModal(TodoUpdateForm);