import React from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.scss';

const Container = ({ children, classes }) => {
  const containerClasses = [s.container];

  if (classes) {
    containerClasses.push(classes);
  }

  return <div className={containerClasses.join(' ')}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

Container.defaultProps = {
  classes: '',
};

export default Container;
