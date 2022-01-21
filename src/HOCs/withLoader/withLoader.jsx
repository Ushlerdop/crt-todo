import React from 'react'
import loader from '../../assets/svg/loader.svg'
import styles from './withLoader.module.scss'
import PropTypes from 'prop-types'

function withLoader(Component) {
  class Loader extends React.Component {
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

  Loader.propTypes = {
    isLoading: PropTypes.bool,
  };

  return Loader;
}

export default withLoader;