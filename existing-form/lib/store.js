import Joi from 'joi';

export const init = () => ({
  fields: {
    email: {
      label: 'Email',
      id: 'field-email',
      type: 'email',
      name: 'field-email',
      value: '',
      validation: Joi.string().email({ tlds: { allow: false } }),
    },
    firstName: {
      label: 'First name',
      id: 'field-first-name',
      type: 'text',
      name: 'field-first-name',
      value: '',
      maxLength: '40',
      validation: Joi.string().max(40),
    },
  },
});

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      const [key, value] = action.payload;
      return {
        ...state,
        fields: {
          ...state.fields,
          [key]: {
            ...state.fields[key],
            value,
          },
        },
      };
    }

    case 'on-focus': {
      const key = action.payload;
      return {
        ...state,
        fields: {
          ...state.fields,
          [key]: {
            ...state.fields[key],
            status: '',
          },
        },
      };
    }

    case 'mark-fields-valid': {
      const newState = { ...state };
      newState.fields = Object.keys(state.fields).reduce((newFields, key) => {
        newFields[key] = {
          ...state.fields[key],
          status:
            state.fields[key].status === 'success'
              ? state.fields[key].status
              : '',
        };
        return newFields;
      }, {});

      return newState;
    }

    case 'mark-fields-invalid': {
      const newState = { ...state, fields: { ...state.fields } };

      action.payload.forEach((key) => {
        newState.fields[key] = {
          ...state.fields[key],
          status: 'error',
        };
      });

      return newState;
    }

    default:
      // eslint-disable-next-line no-console
      console.log(action.type);
      throw new Error('Action not handled');
  }
};
