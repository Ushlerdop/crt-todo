import './App.scss';
import React, { Component } from 'react';
import Todo from './components/Todo/Todo';
import { LanguageContext } from './LanguageContext';
import En from './languages/En';
import Ru from './languages/Ru';
import sleep from './utils/sleep';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dictionary: {
        language: Ru,
      },
      isLoading: true,
    };

    this.languageToggle = this.languageToggle.bind(this);
  }

  componentDidMount() {
    //имитация обращения к API
    sleep(1000)
      .then(() => this.setState({ isLoading: false }))
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
          <Todo 
            isLoading={this.state.isLoading}
          />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
