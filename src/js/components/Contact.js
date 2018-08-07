import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactsList: [
        {
          title: 'GitHub',
          icon: 'fa-github',
          url: 'https://github.com/jesusgoku',
        },
        {
          title: 'LinkedIn',
          icon: 'fa-linkedin',
          url: 'https://www.linkedin.com/in/jesusurrutia',
        },
        {
          title: 'Twitter',
          icon: 'fa-twitter',
          url: 'https://twitter.com/jesusgoku',
        },
      ],
    };
  }

  render() {
    const { contactsList } = this.state;
    return (
      <ul className="contact-component">
        {contactsList.map(i => (
          <li className="contact-component__item" key={i.title}>
            <a href={i.url} className="contact-component__link" title={i.title} target="_blank">
              <i className={`fa ${i.icon} contact-component__icon`}/>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}


export default Contact;
