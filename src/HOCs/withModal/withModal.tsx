import React from 'react';
import styles from './withModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ModalProps = {
  active: boolean,
  setModalActive(value: boolean): void,
}

function withModal<Props>(Component: React.ComponentType<Props>) {
  return (props: Props & ModalProps): JSX.Element => {
    return (
      <div
        className={cx({
          modal: true,
          active: props.active,
        })}
        onClick={() => props.setModalActive(false)}
      >
        <button
          className={styles.closeWindowButton}
          onClick={() => props.setModalActive(false)}
        >🠈</button>
        <div
          className={cx({
            modalContent: true,
            active: props.active,
          })}
          onClick={(e) => e.stopPropagation()}
        >
          <Component {...props} />
        </div>
      </div>
    )
  }
}

export default withModal;