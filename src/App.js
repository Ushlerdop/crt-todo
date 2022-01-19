import './App.scss';
import React, { Component } from 'react';
import Todo from './components/Todo/Todo';
import { LanguageContext } from './LanguageContext';
import En from './languages/En';
import Ru from './languages/Ru';
import sleep from './utils/sleep';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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
        <ErrorBoundary>
          <LanguageContext.Provider value={{language:this.state.dictionary.language, languageToggle: this.languageToggle}}>
            <Todo 
              isLoading={this.state.isLoading}
            />
          </LanguageContext.Provider>
        </ErrorBoundary>
      </div>
    );
  }
}

LanguageContext.Provider.propTypes = {
  value:PropTypes.shape({
    languageToggle: PropTypes.func,
    language:PropTypes.shape({
      languageToggleButton: PropTypes.string,
      form: PropTypes.shape({
        title: PropTypes.string,
        note: PropTypes.string,
        addButton: PropTypes.string,
        updateButton: PropTypes.string,
      }),
      tasksMods: PropTypes.shape({
        allTasks: PropTypes.string,
        activeTasks: PropTypes.string,
        importantTasks: PropTypes.string,
        doneTasks: PropTypes.string,
      }),
      task: PropTypes.shape({
        edited: PropTypes.string,
      }),
    })
  }),
};

export default App;
