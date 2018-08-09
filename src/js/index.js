import React from 'react';
import { render } from 'react-dom';

import App from './views/App';

import '../scss/app.scss';


import resumeEs from '../../resume.es.json';
import resumeEn from '../../resume.en.json';

const resumes = {
  en: resumeEn,
  es: resumeEs,
};

const locale = 'es';

render(<App resume={resumes[locale]} />, window.root);
