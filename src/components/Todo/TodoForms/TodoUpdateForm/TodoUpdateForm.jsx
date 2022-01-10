import React, { Component } from 'react';
import Modal from '../../../Modal/Modal';
import styles from './TodoUpdateForm.module.scss';

class TodoUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.textInput = React.createRef();
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
  componentDidMount(){
    //устанавливаем высоту textarea под высоту текста внутри, но с ограничением в 300 пикселей
    this.textArea.current.style.height = `${Math.min(this.textArea.current.scrollHeight, 300)}px`;
    console.log(this.textArea);
  }
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
    console.log(this.textArea.current);
    this.textArea.current.style.height = 'inherit';
    this.textArea.current.style.height = `${e.target.scrollHeight}px`;
    this.textArea.current.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  handleSubmit(e) {
    e.preventDefault();
    const maxTextInputLength = 500;
    const maxTextAreaLength = 3000;
    if (this.textArea.current.value || this.textInput.current.value) {

      if (this.textInput.current.value.length <= maxTextInputLength && this.textArea.current.value.length <= maxTextAreaLength) {
        const title = this.textInput.current.value;
        const description = this.textArea.current.value;
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
      } else {
        alert(`You can write no more than ${maxTextInputLength} characters in Title and ${maxTextAreaLength} in Description sections`);
      }

    } else {
      alert('You have to text something in title or description');
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
          <button className={styles.addButton}>Update</button>
        </form>
      </div>
    );
  }
}

export default Modal(TodoUpdateForm);