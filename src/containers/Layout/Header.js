import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppSidebarToggler from '../SidebarToggler';
import AppNavbarBrand from '../NavbarBrand';

import AppAsideToggler from '../AsideToggler';

import logo from '../../assets/img/brand/logo.png';
import sygnet from '../../assets/img/brand/sygnet.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class Header extends Component {
  render() {
    return (
      <>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Reactjs UI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Reactjs UI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
