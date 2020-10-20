import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({ children, ...props }) => (
  <button css={styles.root} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
