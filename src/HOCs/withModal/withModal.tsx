import React from 'react';
import styles from './withModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ModalProps = {
  active: boolean,
  setModalActive: (value: boolean) => void,
}

function withModal<Props>(Component: React.ComponentType<Props>) {
  return (props: Props & ModalProps) => {
    //сделал так, т.к. это общий HOC. Типы будут определяться уже внутри каждого <Component />
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
        <button
          className={styles.closeWindowButton}
          onClick={() => props.setModalActive(false)}
        >🠈</button>
        <div
          className={modalContentClassName}
          onClick={(e) => e.stopPropagation()}
        >
          <Component {...props} />
        </div>
      </div>
    )
  }
}

export default withModal;