import React from 'react'
import loader from '../../assets/svg/loader.svg'
import styles from './withLoader.module.scss'
import PropTypes from 'prop-types'

function withLoader(Component) {
  function Loader(props) {
    return (
      props.isLoading
        ? <div className={styles.container}>
            <img src={loader} alt="Загрузка/Loading" />
          </div>
        : <Component {...props} />
    );
  }

  Loader.propTypes = {
    isLoading: PropTypes.bool,
  };

  return Loader;
}

export default withLoader;