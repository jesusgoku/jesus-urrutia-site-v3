import React, { Component } from 'react';

import Home from './Home';

function App(props) {
  const { resume } = props;

  return (<Home {...resume.basics} />);
}

export default App;
