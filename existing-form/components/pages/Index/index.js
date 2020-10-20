import React, { useReducer, useCallback } from 'react';
import styles from './styles';
import { reducer, init } from 'lib/store';
import InputText from 'components/InputText';
import Button from 'components/Button';
import { Global } from '@emotion/core';
import Joi from 'joi';
import { get } from 'lodash';

const Index = () => {
  const [store, dispatch] = useReducer(reducer, undefined, init);

  // Get fields from store
  const { fields } = store;

  // Get individual fields
  const { email, firstName } = fields;

  // For when a field changes
  const onChange = (key, value) =>
    dispatch({ type: 'change', payload: [key, value] });

  // For when a field is focused on
  const onFocus = (key) => dispatch({ type: 'on-focus', payload: key });

  // For when submitting the form
  const onSubmit = useCallback(() => {
    dispatch({ type: 'mark-fields-valid' });

    // Build validation schema and values object
    const schema = {};
    const values = {};

    Object.keys(fields).forEach((key) => {
      const { validation, value } = fields[key];

      if (!validation) {
        return;
      }

      schema[key] = validation;
      values[key] = value;
    });

    const result = Joi.object(schema).validate(values, { abortEarly: false });

    if (result.error) {
      // If invalid, mark the invalid fields as having issues and display error
      const details = get(result, 'error.details') || [];
      const invalidFields = details.reduce((invalidFields, detail) => {
        const key = get(detail, 'path[0]');

        if (key && !invalidFields.includes(key)) {
          invalidFields.push(key);
        }

        return invalidFields;
      }, []);

      dispatch({
        type: 'mark-fields-invalid',
        payload: invalidFields,
      });
      return;
    }

    alert('Submitted');
  }, [fields]);

  return (
    <div css={styles.root}>
      <Global styles={styles.global} />
      <h1>Welcome to this lovely form.</h1>
      <InputText
        {...firstName}
        onFocus={() => onFocus('firstName')}
        onChange={(e) => onChange('firstName', e.target.value)}
      />
      <InputText
        {...email}
        onFocus={() => onFocus('email')}
        onChange={(e) => onChange('email', e.target.value)}
      />
      <Button onClick={onSubmit}>Continue</Button>
    </div>
  );
};

export default Index;
