import React, { Component } from 'react';

function Profiles (props) {
  const { profiles } = props;
  console.log(profiles);
  return (
    <ul className="contact-component">
      {profiles.map(i => (
        <li className="contact-component__item" key={i.network}>
          <a href={i.url} className="contact-component__link" title={i.network} target="_blank">
            <i className={`fa fa-${i.network.toLowerCase()} contact-component__icon`}/>
          </a>
        </li>
      ))}
    </ul>
  );
}


export default Profiles;
