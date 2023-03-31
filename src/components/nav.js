import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ openModal, print, logo }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src={logo} alt="logo" />
        <span className="title is-4">- Proxy Generator</span>
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <button
            type="button"
            className="button is-primary"
            onClick={openModal}
          >
            <strong>Add Cards</strong>
          </button>
          <button type="button" className="button is-light" onClick={print}>
            Print
          </button>
        </div>
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  openModal: PropTypes.func,
  print: PropTypes.func,
  logo: PropTypes.any,
};

export default Nav;
