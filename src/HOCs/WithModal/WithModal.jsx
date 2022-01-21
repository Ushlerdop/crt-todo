import React from 'react';
import styles from './withModal.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function withModal(Component) {
  function ModalWindow(props) {
    const modalClassName = cx({
      modal: true,
      active: props.active,
    });

    const modalContentClassName = cx({
      modalContent: true,
      active: props.active,
    });

    return (
      <div
        className={modalClassName}
        onClick={() => props.setModalActive(false)}
      >
        <div
          className={modalContentClassName}
          onClick={(e) => e.stopPropagation()}
        >
          <Component {...props} />
        </div>
      </div>
    )
  }

  ModalWindow.propTypes = {
    active: PropTypes.bool,
    setModalActive: PropTypes.func,  
  };

  return ModalWindow;
}

export default withModal;