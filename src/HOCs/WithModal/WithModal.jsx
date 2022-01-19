import React, { Component } from 'react';
import styles from './withModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function withModal(Component) {
  return class extends React.Component {
    render() {
      const modalClassName = cx({
        modal: true,
        active: this.props.active,
      });

      const modalContentClassName = cx({
        modalContent: true,
        active: this.props.active,
      });

      return (
        <div
          className={modalClassName}
          onClick={() => this.props.setModalActive(false)}
        >
          <div
            className={modalContentClassName}
            onClick={(e) => e.stopPropagation()}
          >
            <Component {...this.props} />
          </div>
        </div>
      );
    }
  }
}

export default withModal;