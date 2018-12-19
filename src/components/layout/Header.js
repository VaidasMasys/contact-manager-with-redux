import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//dirbu cia
const Header = props => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-container__branding-container">
          <a href="/"> Contact Manager</a>
        </div>

        <div className="nav-container__menu-container">
          <div className="nav-container__menu-container__link-container">
            <Link to="/">
              <i className="fas fa-home" /> Home
            </Link>
          </div>
          <div className="nav-container__menu-container__link-container">
            <Link to="/contact/add">
              <i className="fas fa-plus" /> Add
            </Link>
          </div>
          <div className="nav-container__menu-container__link-container">
            <Link to="/about">
              <i className="fas fa-question" /> About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
