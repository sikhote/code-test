import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import styles from './styles';

const InputText = ({ label, status, ...props }) => (
  <div css={styles.root}>
    <div css={styles.label}>{label}</div>
    <input
      css={merge({}, styles.input, status === 'error' ? styles.inputError : {})}
      {...props}
    />
  </div>
);

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string,
};

InputText.defaultProps = {
  status: '',
};

export default InputText;
