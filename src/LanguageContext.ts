import React from 'react';
import { ILang } from './languages/interface';

import Ru from './languages/Ru';

export interface IContext {
  language: ILang,
  languageToggle: () => void,
}

const defaultValue: IContext = { language: Ru, languageToggle: () => {} };

export const LanguageContext: React.Context<IContext> = React.createContext<IContext>(defaultValue);