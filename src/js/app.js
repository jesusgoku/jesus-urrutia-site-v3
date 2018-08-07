import React, { Component } from 'react';
import { render } from 'react-dom';

import Home from './views/Home';

import '../scss/app.scss';

class App extends Component {
  render() {
    return (<Home />);
  }
}

render(<App/>, window.root);
