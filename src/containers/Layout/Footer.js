import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <>
        <span><a href="https://github.com/reactjsui">Reactjs UI</a> &copy; 2019.</span>
        <span className="ml-auto">Powered by <a href="https://github.com/reactjsui">Reactjs UI</a></span>
      </>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
