import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'header',
  fixed: false
};

class Header extends Component {
  componentDidMount() {
    this.isFixed(this.props.fixed);
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('header-fixed'); }
  }

  render() {
    const {
      className,
      children,
      tag: Tag,
      ...attributes
    } = this.props;

    delete attributes.fixed;

    const classes = classNames(className, 'app-header', 'navbar', 'navbar-expand');

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
