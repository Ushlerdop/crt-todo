import React, { useContext } from 'react';
import { LanguageContext } from '../../../../LanguageContext';
import styles from './LanguageToggleButton.module.scss';

function LanguageToggleButton() {
  const { language, languageToggle } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <button className={styles.langToggleButton} onClick={languageToggle}>{language.languageToggleButton}</button>
    </div>
  );
}

export default LanguageToggleButton;