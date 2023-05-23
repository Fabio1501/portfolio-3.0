import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import home_es from './translation/ES/home.json'
import home_en from './translation/EN/home.json'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      home: home_es,
    },
    en: {
      home: home_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
