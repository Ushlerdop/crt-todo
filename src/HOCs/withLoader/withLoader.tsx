import React from 'react'
import loader from '../../assets/svg/loader.svg'
import styles from './withLoader.module.scss'

interface LoaderProps {
  isLoading: boolean
}

function withLoader<Props>(Component: React.ComponentType<Props>) {
  return (props: Props & LoaderProps) => {
    //сделал так, т.к. это общий HOC. Типы будут определяться уже внутри каждого <Component />
    return (
      props.isLoading
        ? <div className={styles.container}>
            <img src={loader} alt="Загрузка/Loading" />
          </div>
        : <Component {...props} />
    );
  }
}

export default withLoader;