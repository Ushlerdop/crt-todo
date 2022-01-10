import React, { Component } from 'react';
import styles from './TodoAddForm.module.scss';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.state = {
      titleText: '',
      descriptionText: '',
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    //устанавливаем высоту textarea под высоту текста внутри, но с ограничением в 300 пикселей
    this.textArea.current.style.height = `${Math.min(this.textArea.current.scrollHeight, 300)}px`;
    console.log(this.textArea);
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
    this.textArea.current.style.height = `${e.target.scrollHeight}px`;
    this.textArea.current.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
  }

  handleSubmit(e) {
    e.preventDefault();
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
    console.log(task);
    this.props.addTask(task);
    this.setState({
      titleText: '',
      descriptionText: '',
    });
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