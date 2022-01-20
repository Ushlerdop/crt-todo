import React, { Component } from 'react';
import styles from './ChangeTaskButton.module.scss';
import PropTypes from 'prop-types';

class ChangeTaskButton extends Component {
  render() {
    return <button
      className={styles.changeButton}
      onClick={() => this.props.setEditModalActive(true)}
    >✎</button>
  }
}

ChangeTaskButton.propTypes = {
  setEditModalActive: PropTypes.func,
}

export default ChangeTaskButton