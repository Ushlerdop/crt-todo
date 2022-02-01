import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkPage.module.scss';

function LinkPage(): JSX.Element {
  return (
    <div className={styles.linkBlock}>
      <h1>Андрей Халиманенков</h1>
      <Link to={'/todo/all'} className={styles.link}>Todo приложение</Link>
    </div>
  );
};

export default LinkPage;