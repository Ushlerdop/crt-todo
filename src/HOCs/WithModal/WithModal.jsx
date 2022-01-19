import React from 'react';
import styles from './withModal.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function withModal(Component) {
  class ModalWindow extends React.Component {
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

  ModalWindow.propTypes = {
    active: PropTypes.bool,
    setModalActive: PropTypes.func,  
  };

  return ModalWindow;
}

export default withModal;