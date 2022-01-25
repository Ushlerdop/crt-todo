import React, { useContext, useRef, useState } from 'react';
import { LanguageContext } from '../../../../LanguageContext';
import styles from '../TodoForm.module.scss';

function TodoAddForm(props) {
  const textArea = useRef(null);
  const textInput = useRef(null);
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  const { language } = useContext(LanguageContext);

  const onTitleChange = (e) => {
    setTitleText(e.target.value);
  }

  const onDescriptionChange = (e) => {
    setDescriptionText(e.target.value);
    textArea.current.style.height = 'inherit';
    textArea.current.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //проверка на существование задачи с таким же тайтлом
    if (props.tasks.some(task => task.title.toLowerCase() === e.target.title.value.toLowerCase())) {
      return alert(`You already have a task with this Title`);
    }

    const maxTextInputLength = 500;
    const maxTextAreaLength = 3000;
    if (!(e.target.title.value && e.target.description.value)) {
      return alert('You have to text something in Title and Description');
    }

    if (e.target.title.value.length <= maxTextInputLength && e.target.description.value.length <= maxTextAreaLength) {
      const title = e.target.title.value;
      const description = e.target.description.value;
      const editedDate = `${new Date().toLocaleDateString()}`;
      const id = Date.now();
      const task = {
        title,
        description,
        isDone: false,
        isImportant: false,
        editedDate,
        id,
      }
      props.addTask(task);
      setTitleText('');
      setDescriptionText('');
    } else {
      alert(`You can write no more than ${maxTextInputLength} characters in Title and ${maxTextAreaLength} in Description sections`);
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