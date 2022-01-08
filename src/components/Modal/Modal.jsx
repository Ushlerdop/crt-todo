import React, { Component } from 'react';
import TodoUpdateForm from '../Todo/TodoForms/TodoUpdateForm/TodoUpdateForm';
import styles from './Modal.module.scss';

class Modal extends Component {
  render() {
    return (
      <div 
        className={this.props.active ? styles.modal + ' ' + styles.active : styles.modal} 
        onClick={() => this.props.setEditModalActive(false)}
      >
        <div 
          className={this.props.active ? styles.modalContent + ' ' + styles.active : styles.modalContent}
          onClick={(e) => e.stopPropagation()}          
        >
          <TodoUpdateForm 
            updateTask={this.props.updateTask}
            title={this.props.title}
            description={this.props.description}
            id={this.props.id}
          />
        </div>
      </div>
    );
  }
}

export default Modal;