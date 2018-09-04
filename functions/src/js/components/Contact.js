'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

    _this.state = {
      contactsList: [{
        title: 'GitHub',
        icon: 'fa-github',
        url: 'https://github.com/jesusgoku'
      }, {
        title: 'LinkedIn',
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/in/jesusurrutia'
      }, {
        title: 'Twitter',
        icon: 'fa-twitter',
        url: 'https://twitter.com/jesusgoku'
      }]
    };
    return _this;
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      var contactsList = this.state.contactsList;

      return _react2.default.createElement(
        'ul',
        { className: 'contact-component' },
        contactsList.map(function (i) {
          return _react2.default.createElement(
            'li',
            { className: 'contact-component__item', key: i.title },
            _react2.default.createElement(
              'a',
              { href: i.url, className: 'contact-component__link', title: i.title, target: '_blank' },
              _react2.default.createElement('i', { className: 'fa ' + i.icon + ' contact-component__icon' })
            )
          );
        })
      );
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;