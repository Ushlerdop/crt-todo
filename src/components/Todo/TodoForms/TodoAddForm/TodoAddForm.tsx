import React, { useContext, useEffect, useRef, useState } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import { store } from '../../../../store';
import { ITaskObject } from '../../../../store/interface';
import styles from '../TodoForm.module.scss';
import { useForm } from 'react-hook-form';

type FormInputs = {
  [key: string]: string;
}

function TodoAddForm(): JSX.Element {
  const addForm = useRef(null);

  const { language } = useContext<IContext>(LanguageContext);  

  const { register, formState: { errors }, reset, handleSubmit} = useForm<FormInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {    
    e.target.style.height = 'inherit';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  const onSubmit = handleSubmit((data: FormInputs)  => {
    if (store.tasks.some(task => task.title.toLowerCase() === data.title.toLowerCase())) {
      return alert(language.errorMessages.form.sameTitle);
    }
    
    const title: string = data.title;
    const description: string = data.description;
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
    reset();
    //сбрасываю высоту textarea с description
    addForm.current[1].style.height = 'inherit';   
  });
  
  const minTextInputLength: number = 1;
  const minTextAreaLength: number = 1;
  const maxTextInputLength: number = 500;
  const maxTextAreaLength: number = 3000;
  const rules = {
    title: {
      required: language.errorMessages.form.emptyField,
      minLength: {
        value: minTextInputLength,
        message: language.errorMessages.form.minTitleLength(minTextInputLength),
      },
      maxLength: {
        value: maxTextInputLength,
        message: language.errorMessages.form.maxTitleLength(maxTextInputLength),
      },
    },
    description: {
      required: language.errorMessages.form.emptyField,
      minLength: {
        value: minTextAreaLength,
        message: language.errorMessages.form.minDescriptionLength(minTextAreaLength)
      },
      maxLength: {
        value: maxTextAreaLength,
        message: language.errorMessages.form.maxDescriptionLength(maxTextAreaLength),
      },
      onChange: onDescriptionChange
    },
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmit} className={styles.todoForm} ref={addForm}>
        <div className={styles.titleInputSection}>
          <div>
            <label htmlFor="title">{language.form.title}</label>
          </div>
          <input
            name='title'
            id='title'
            className={styles.todoFormInput}
            {...register('title', rules.title)}
          />
          <div>
            {errors?.title && <p>{errors?.title.message || 'Error'}</p>}
          </div>
        </div>
        <div className={styles.descriptionInputSection}>
          <div>
            <label htmlFor="description">{language.form.note}</label>
          </div>
          <textarea
            name='description'
            id='description'
            className={styles.todoFormTextarea}
            {...register('description', rules.description)}
          />
          <div>
            {errors?.description && <p>{errors?.description.message || 'Error'}</p>}
          </div>
        </div>
        <button className={styles.addButton}>{language.form.addButton}</button>
      </form>
    </div>
  );
}

export default TodoAddForm;