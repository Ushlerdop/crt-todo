import React, { useContext, useEffect, useRef, useState } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import { store } from '../../../../store';
import { ITaskObject } from '../../../../store/interface';
import styles from '../TodoForm.module.scss';

function TodoAddForm(): JSX.Element {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const textInput = useRef<HTMLInputElement>(null);
  
  const [titleText, setTitleText] = useState<string>('');
  const [descriptionText, setDescriptionText] = useState<string>('');

  const { language } = useContext<IContext>(LanguageContext);

  useEffect(() => {
    textArea.current.style.height = 'inherit';
    textArea.current.style.height = `${Math.min(textArea.current.scrollHeight, 300)}px`;
  }, [descriptionText])

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleText(e.target.value);
  }

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescriptionText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    const maxTextInputLength: number = 500;
    const maxTextAreaLength: number = 3000;

    const titleValue: string = e.target[0].value;
    const descriptionValue: string = e.target[1].value;

    //проверка на существование задачи с таким же тайтлом
    if (store.tasks.some(task => task.title.toLowerCase() === titleValue.toLowerCase())) {
      return alert(language.errorMessages.sameTitle);
    }
    if (!(titleValue && descriptionValue)) {
      return alert(language.errorMessages.emptyInputs);
    }

    if (titleValue.length <= maxTextInputLength && descriptionValue.length <= maxTextAreaLength) {
      const title: string = titleValue;
      const description: string = descriptionValue;
      const editedDate: string = `${new Date().toLocaleDateString()}`;
      const id: number = Date.now();
      const task: ITaskObject = {
        title,
        description,
        isDone: false,
        isImportant: false,
        editedDate,
        id,
      }
      store.addTask(task);
      setTitleText('');
      setDescriptionText('');
    } else {
      alert(language.errorMessages.maxLength(maxTextInputLength, maxTextAreaLength));
    }
  }

  return (
    <div className={styles.todoFormContainer}>
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
        <button className={styles.addButton}>{language.form.addButton}</button>
      </form>
    </div>
  );
}

export default TodoAddForm;