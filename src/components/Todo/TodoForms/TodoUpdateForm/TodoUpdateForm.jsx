import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LanguageContext } from '../../../../LanguageContext';
import withModal from '../../../../HOCs/withModal/withModal';
import styles from '../TodoForm.module.scss';
import { store } from '../../../../store';

function TodoUpdateForm(props) {
  const textArea = useRef(null);
  const textInput = useRef(null);

  const [titleText, setTitleText] = useState(props.title);
  const [descriptionText, setDescriptionText] = useState(props.description);

  const { language } = useContext(LanguageContext);

  useLayoutEffect(() => {
    textArea.current.style.height = `${Math.min(textArea.current.scrollHeight, 300)}px`;
  }, []);

  useEffect(() => {
    setTitleText(props.title);
    setDescriptionText(props.description);
  }, [props.active]);

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
    const maxTextInputLength = 500;
    const maxTextAreaLength = 3000;

    //проверка на существование задачи с таким же тайтлом, но другим ID (иначе будет конфликт задачи с самой собой)
    if (store.tasks.some(task => task.title.toLowerCase() === e.target.title.value.toLowerCase() && task.id !== props.id)) {
      return alert(`You already have a task with this Title`);
    }

    if (!(e.target.description.value && e.target.title.value)) {
      return alert('You have to text something in title and description');
    }

    if (e.target.title.value.length <= maxTextInputLength && e.target.description.value.length <= maxTextAreaLength) {
      const title = e.target.title.value;
      const description = e.target.description.value;
      const isDone = props.isDone;
      const isImportant = props.isImportant;
      const editedDate = `${new Date().toLocaleDateString()}`;
      const id = props.id;
      const task = {
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