import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import strings from './localization';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',
    resources: {
      en: {
        common: strings.setLanguage('en')
      },

      nl: {
        common: strings.setLanguage('nl')
      }
    }
});


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
