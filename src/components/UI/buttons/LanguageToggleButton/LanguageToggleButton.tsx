import React, { useContext } from 'react';
import { IContext, LanguageContext } from '../../../../LanguageContext';
import styles from './LanguageToggleButton.module.scss';

function LanguageToggleButton(): JSX.Element {
  const { language, languageToggle } = useContext<IContext>(LanguageContext);
  return (
    <div className={styles.container}>
      <button className={styles.langToggleButton} onClick={languageToggle}>{language.languageToggleButton}</button>
    </div>
  );
}

export default LanguageToggleButton;