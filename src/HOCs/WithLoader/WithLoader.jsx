import React, { Component } from 'react';
import loader from '../../assets/svg/loader.svg'
import styles from './withLoader.module.scss'

function withLoader(Component) {
  return class extends React.Component {
    render() {
      return (
        this.props.isLoading
          ? <div className={styles.container}>
              <img src={loader} alt="Загрузка/Loading" />
            </div>
          : <Component {...this.props} />
      );
    }
  }
}

export default withLoader;