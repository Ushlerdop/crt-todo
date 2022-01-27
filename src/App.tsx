import './App.scss';
import React, { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';
import { IContext, LanguageContext } from './LanguageContext';
import En from './languages/En';
import Ru from './languages/Ru';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkPage from './components/LinkPage/LinkPage';
import { store } from './store';
import { observer } from 'mobx-react';

function App(): JSX.Element{
  const [dictionary, setDictionary] = useState(Ru);

  useEffect(() => {
    store.fakeFetch(1000);
  }, []);

  const languageToggle = () => {
    setDictionary(dictionary => {
      if (dictionary === Ru) {
        return En;
      } else {
        return Ru;
      }
    })
  }

  const contextValue: IContext = { language: dictionary, languageToggle: languageToggle }

  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
              <Route path='/'
                element={<LinkPage />}
              />         
              <Route path='/todo/*'
                element={
                  <LanguageContext.Provider value={contextValue}>
                    <Todo isLoading={store.isAppLoading} />
                  </LanguageContext.Provider>
                }
              />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
