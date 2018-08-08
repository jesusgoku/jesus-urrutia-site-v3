import React, { Component } from 'react';

import Contact from '../components/Contact';

// import imageMe from '../../images/me-480.jpg';


class Home extends Component {
  render() {
    return (
      <div className="home-view">
        {/* <p className="home-view__image-wrapper"><img src={imageMe} className="home-view__image"/></p> */}
        <h1 className="home-view__title">Jesús Urrutia</h1>
        <h2 className="home-view__subtitle">Desarrollador</h2>
        <Contact/>
      </div>
    );
  }
}

export default Home;
