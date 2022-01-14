import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';
import styles from './LanguageToggleButton.module.scss';

class LanguageToggleButton extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {
          ({ language, languageToggle }) => (
            <div className={styles.container}>
              <button className={styles.langToggleButton} onClick={languageToggle}>{language.languageToggleButton}</button>
            </div>
          )
        }
      </LanguageContext.Consumer>
    );
  }
}

export default LanguageToggleButton;