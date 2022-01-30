import React, { useContext, useEffect, useRef, useState } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import { store } from '../../../../store';
import { ITaskObject } from '../../../../store/interface';
import styles from '../TodoForm.module.scss';
import { useForm } from 'react-hook-form';
import formValidationRules from '../validationRules';

type FormInputs = {
  [key: string]: string;
}

function TodoAddForm(): JSX.Element {
  const addForm = useRef(null);

  const { language } = useContext<IContext>(LanguageContext);

  //правила для валидации с учётом языка
  const validationRules = formValidationRules(language);

  const { register, formState: { errors }, reset, handleSubmit } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  const onSubmit = handleSubmit((data: FormInputs) => {
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
            {...register('title', validationRules.title)}
          />
          <div>
            {errors?.title &&
              <p className={styles.formError}>
                {errors?.title.message || language.errorMessages.form.commonError}
              </p>
            }
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
            {...register('description', { ...validationRules.description, onChange: onDescriptionChange })}
          />
          <div>
            {errors?.description &&
              <p className={styles.formError}>
                {errors?.description.message || language.errorMessages.form.commonError}
              </p>
            }
          </div>
        </div>
        <button className={styles.addButton}>{language.form.addButton}</button>
      </form>
    </div>
  );
}

export default TodoAddForm;