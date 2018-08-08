import React from 'react';
import { render } from 'react-dom';

import App from './views/App';

import '../scss/app.scss';

import resume from '../../resume.json';

render(<App resume={resume} />, window.root);
