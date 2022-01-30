import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import withModal from '../../../../HOCs/withModal/withModal';
import styles from '../TodoForm.module.scss';
import { store } from '../../../../store';
import { ITaskObject } from '../../../../store/interface';
import { IUpdateFormProps } from './interface';
import { useForm } from 'react-hook-form';
import formValidationRules from '../validationRules';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type FormInputs = {
  [key: string]: string;
}

function TodoUpdateForm(props: IUpdateFormProps): JSX.Element {
  const addForm = useRef(null);

  const { language } = useContext<IContext>(LanguageContext);

  //правила для валидации с учётом языка
  const validationRules = formValidationRules(language);

  const { register, formState: { errors }, handleSubmit, setValue, clearErrors } = useForm<FormInputs>({
    mode: 'onChange',
  });  

  const titleClassName = cx({
    todoFormInput: true,
    todoFormInputWithError: errors.title,
  });

  const descriptionClassName = cx({
    todoFormTextarea: true,
    todoFormTextareaWithError: errors.description,
  });

  useLayoutEffect(() => {
    addForm.current[1].style.height = `${Math.min(addForm.current[1].scrollHeight, 300)}px`;
  }, [props.active]);

  useEffect(() => {
    setValue("title", props.title, {
      shouldValidate: true,
    });
    setValue("description", props.description, {
      shouldValidate: true,
    });
    clearErrors();
  }, [props.active]);

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  const onSubmit = handleSubmit((data: FormInputs) => {
    if (store.tasks.some(task => task.title.toLowerCase() === data.title.toLowerCase() && task.id !== props.id)) {
      return alert(language.errorMessages.form.sameTitle);
    }
    //закрываем окно с редактированием, т.к. данные не изменились
    if (props.title === data.title && props.description === data.description) {
      return props.setModalActive(false);
    }

    const title: string = data.title;
    const description: string = data.description;
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
    //сбрасываю высоту textarea с description
    addForm.current[1].style.height = 'inherit';    
  });

  return (
    <div className={styles.todoFormContainerUpdateForm}>
      <form onSubmit={onSubmit} className={styles.todoForm} ref={addForm}>
        <div className={styles.titleInputSection}>
          <div>
            <label htmlFor="title">{language.form.title}</label>
          </div>
          <input
            name='title'
            id='title'
            defaultValue={props.title}
            className={titleClassName}
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
            defaultValue={props.description}
            className={descriptionClassName}
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
        <button className={styles.addButton}>{language.form.updateButton}</button>
      </form>
    </div>
  )
}

export default withModal(TodoUpdateForm);