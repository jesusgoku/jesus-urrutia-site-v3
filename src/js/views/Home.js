import React, { Component } from 'react';

import Contact from '../components/Contact';

import imageMe from '../../images/me-480.jpg';

function Home (props) {
  const { name, label } = props;
  return (
    <div className="home-view">
      <p className="home-view__image-wrapper"><img src={imageMe} className="home-view__image"/></p>
      <h1 className="home-view__title">{ name }</h1>
      <h2 className="home-view__subtitle">{ label }</h2>
      <Contact/>
    </div>
  );
}

export default Home;
