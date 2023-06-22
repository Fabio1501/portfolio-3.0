import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import home_es from './translation/ES/home.json'
import home_en from './translation/EN/home.json'
import services_en from './translation/EN/services.json'
import services_es from './translation/ES/services.json'
import projects_en from './translation/EN/projects.json'
import projects_es from './translation/ES/projects.json'
import education_en from './translation/EN/education.json'
import education_es from './translation/ES/education.json'


i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      home: home_es,
      services: services_es,
      projects: projects_es,
      education: education_es,
    },
    en: {
      home: home_en,
      services: services_en,
      projects: projects_en,
      education: education_en,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
