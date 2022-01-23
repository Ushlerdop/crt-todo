import './App.scss';
import React, { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';
import { LanguageContext } from './LanguageContext';
import En from './languages/En';
import Ru from './languages/Ru';
import sleep from './utils/sleep';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkPage from './components/LinkPage/LinkPage';

function App() {
  const [dictionary, setDictionary] = useState(Ru);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sleep(1000)
      .then(() => setIsLoading(false));
  });

  const languageToggle = () => {
    setDictionary(dictionary => {
      if (dictionary === Ru) {
        return En;
      } else {
        return Ru;
      }
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
              <Route path={'/*'}
                element={<LinkPage />}
              />         
              <Route path='/todo/*'
                element={
                  <LanguageContext.Provider value={{ language: dictionary, languageToggle: languageToggle }}>
                    <Todo isLoading={isLoading} />
                  </LanguageContext.Provider>
                }
              />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

LanguageContext.Provider.propTypes = {
  value: PropTypes.shape({
    languageToggle: PropTypes.func,
    language: PropTypes.shape({
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
