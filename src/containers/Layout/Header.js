import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppSidebarToggler from '../SidebarToggler';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class Header extends Component {
  render() {
    return (
      <>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
      </>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
