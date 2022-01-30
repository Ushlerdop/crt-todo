import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import withModal from '../../../../HOCs/withModal/withModal';
import styles from '../TodoForm.module.scss';
import { store } from '../../../../store';
import { ITaskObject } from '../../../../store/interface';
import { IUpdateFormProps } from './interface';
import { useForm } from 'react-hook-form';

type FormInputs = {
  [key: string]: string;
}

function TodoUpdateForm(props: IUpdateFormProps): JSX.Element {
  const [titleText] = useState<string>(props.title);
  const [descriptionText] = useState<string>(props.description);

  const addForm = useRef(null);

  const { language } = useContext<IContext>(LanguageContext);

  const { register, formState: { errors }, handleSubmit, 
    setValue, clearErrors} = useForm<FormInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
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
    if (store.tasks.some(task => task.title.toLowerCase() === data.title.toLowerCase() && task.id !== props.id))  {
      return alert(`You already have a task with this Title`);
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
    <div className={styles.todoFormContainerUpdateForm}>
      <form onSubmit={onSubmit} className={styles.todoForm} ref={addForm}>
        <div className={styles.titleInputSection}>
          <div>
            <label htmlFor="title">{language.form.title}</label>
          </div>
          <input
            name='title'
            id='title'
            defaultValue={titleText}
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
            defaultValue={descriptionText}
            className={styles.todoFormTextarea}
            {...register('description', rules.description)}
          />
          <div>
            {errors?.description && <p>{errors?.description.message || 'Error'}</p>}
          </div>
        </div>
        <button className={styles.addButton}>{language.form.updateButton}</button>
      </form>
    </div>
  )
}

export default withModal(TodoUpdateForm);