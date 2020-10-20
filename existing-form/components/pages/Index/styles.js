import { css } from '@emotion/core';

export default {
  global: css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Helvetica;
    }
  `,
  root: {
    background: 'lavender',
    padding: 40,
    minHeight: '100vh',
    '> *': {
      marginBottom: 10,
      maxWidth: 500,
    },
  },
};
