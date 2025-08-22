/* eslint-disable max-len */
import React from 'react';
import { BaseFieldProps, Field, WrappedFieldProps } from 'redux-form';

export type Props<P = {}> = P & Omit<BaseFieldProps<P>, 'component'> & {
  component: React.ComponentType<WrappedFieldProps & P>;
};

const Component = React.memo(<P extends object>(props: Props<P>) => {
  const { name, component, format, normalize, parse, validate, warn, ...rest } = props;

  const { forwardRef, immutableProps, props: props1, ...props2 } = rest;

  const properties = React.useMemo(() => ({ ...props1, ...props2 }), [props1, props2]);

  return (
    <Field<BaseFieldProps<P>>
      name={name}
      component={component}
      validate={validate} // Allows you to provide a field-level validation rule
      warn={warn} // Allows you to provide a field-level warning rule.
      format={format} // Formats the value from the Redux store to be used for your input component
      parse={parse} // Parses the input by the user into the data type that you want to use in the Redux store.
      normalize={normalize} // Allows you to add logic based on all your form values to put a constraint on the value of the current field.
      forwardRef={forwardRef} // If true, the rendered component will be available with the getRenderedComponent() method
      immutableProps={immutableProps} // Prop names that only require strict-equals, not deep equals, to determine shouldComponentUpdate.
      props={properties as P}
    />
  );
});

export default Component as <T>(props: Props<T>) => JSX.Element;