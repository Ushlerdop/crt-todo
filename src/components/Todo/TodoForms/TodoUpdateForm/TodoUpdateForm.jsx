import React, { Component } from 'react';
import Modal from '../../../Modal/Modal';
import styles from './TodoUpdateForm.module.scss';

class TodoUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: this.props.title,
      descriptionText: this.props.description,
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Этот метод нужен для: есть две одинаковых формы для редактирования задачи. 
  Одна вызывается из модального окна с задачей, другая с главной страницы с общим списком задач.
  Если изменить в одной, а потом в другой, то пропсы подтягивались старые. С componentDidUpdate всё работает как надо.
  */ 
  componentDidUpdate(prevProps, prevState) {
    if(prevState === this.state) {
      this.setState({
        titleText: this.props.title,
        descriptionText: this.props.description,
      })
    }
  }

  onTitleChange(e) {
    this.setState({
      titleText: e.target.value
    });
  }

  onDescriptionChange(e) {
    this.setState({
      descriptionText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const isDone = this.props.isDone;
    const isImportant = this.props.isImportant;
    const editedDate = `${new Date().toLocaleDateString()}`;
    const id = this.props.id;
    const task = {
      title,
      description,
      isDone,
      isImportant,
      editedDate,
      id,
    }
    this.props.updateTask(this.props.id, task);
    this.props.setModalActive(false);
  }

  render() {
    console.log(this.props.description);
    return (
      <div className={styles.todoFormContainer}>
        <form onSubmit={this.handleSubmit} className={styles.todoForm}>
          <div className={styles.titleInputSection}>
            <div>
              <label htmlFor="title">Title</label>
            </div>
            <input
              name='title'
              id='title'
              value={this.state.titleText}
              onChange={this.onTitleChange}
              className={styles.todoFormInput}
            />
          </div>
          <div className={styles.descriptionInputSection}>
            <div>
              <label htmlFor="description">Note</label>
            </div>
            <textarea
              name='description'
              id='description'
              value={this.state.descriptionText}
              onChange={this.onDescriptionChange}
              className={styles.todoFormTextarea}
            />
          </div>
          <button className={styles.addButton}>Update</button>
        </form>
      </div>
    );
  }
}

export default Modal(TodoUpdateForm);