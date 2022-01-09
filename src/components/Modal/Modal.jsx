import React, { Component } from 'react';
import styles from './Modal.module.scss';

function Modal(Component) {
  return class extends Component {
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
            <Component {...this.props} />
          </div>
        </div>
      );
    }
  }
}

export default Modal;