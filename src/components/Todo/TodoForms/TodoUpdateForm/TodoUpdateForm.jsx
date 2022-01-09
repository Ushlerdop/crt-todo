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
    console.log(task);
    this.props.updateTask(this.props.id, task);
    this.props.setEditModalActive(false);
  }

  render() {
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