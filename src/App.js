import './App.scss';
import React, { Component } from 'react';
import Todo from './components/Todo/Todo';
import { LanguageContext } from './LanguageContext';
import En from './languages/En';
import Ru from './languages/Ru';
import LanguageToggleButton from './components/LanguageToggleButton/LanguageToggleButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dictionary: {
        language: Ru,
      },
    };

    this.languageToggle = this.languageToggle.bind(this);
  }

  languageToggle() {
    this.setState(state => {
      if ( state.dictionary.language === Ru ) {
        return {dictionary: {language: En}}
      } else {
        return {dictionary: {language: Ru}}
      }
    })
  }
  
  render() {
    console.log(this.state.dictionary.language.form.addButton);
    return (
      <div className="App">
        <LanguageContext.Provider value={{language:this.state.dictionary.language, languageToggle: this.languageToggle}}>
          <Todo />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
