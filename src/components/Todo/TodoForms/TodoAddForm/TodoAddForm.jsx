import React, { Component } from 'react';
import styles from '../TodoForm.module.scss';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.textInput = React.createRef();
    this.state = {
      titleText: '',
      descriptionText: '',
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
    this.textArea.current.style.height = 'inherit';
    this.textArea.current.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  handleSubmit(e) {
    e.preventDefault();
    /* хотелось бы использовать для валидации React Hook Form, 
    но он не работает в классовых компонентах. Поэтому нативным способом */

    //проверка на существование задачи с таким же тайтлом
    if (this.props.tasks.some(task => task.title.toLowerCase() === e.target.title.value.toLowerCase())) {
      return alert(`You already have a task with this Title`);
    }

    const maxTextInputLength = 500;
    const maxTextAreaLength = 3000;
    if ( !(e.target.title.value && e.target.description.value) ) {
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
      this.props.addTask(task);
      this.setState({
        titleText: '',
        descriptionText: '',
      });
    } else {
      alert(`You can write no more than ${maxTextInputLength} characters in Title and ${maxTextAreaLength} in Description sections`);
    }  
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
              ref={this.textInput}
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
              ref={this.textArea}
            />
          </div>
          <button className={styles.addButton}>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoAddForm;