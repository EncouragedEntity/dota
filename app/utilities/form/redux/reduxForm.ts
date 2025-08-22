import React from 'react';
import { reduxForm } from 'redux-form';
import type * as FormTypes from 'redux-form';

export type WrapperFormProps<FormData, P = {}, ErrorType = string> =
  P & FormTypes.InjectedFormProps<FormData, P, ErrorType> & {
    handleSubmit?: () => void | FormTypes.SubmitHandler<FormData, P, ErrorType>;
  };

interface DecoratedComponentClass<FormData, P> {
  new(props?: P, context?: any): FormTypes.FormInstance<FormData, P>;
  defaultProps: P & { form: string };
}

interface FormDecorator<FormData, P, ErrorType = string> {
  (component: React.ComponentType<WrapperFormProps<FormData, P, ErrorType>>):
    DecoratedComponentClass<FormData, FormTypes.DecoratedFormProps<FormData, P, ErrorType>>;
}

interface TypedReduxForm {
  <FormData = {}, P = {}, ErrorType = string>(
    config: Partial<FormTypes.ConfigProps<FormData, P, ErrorType>>,
  ): FormDecorator<FormData, P, ErrorType>;
}

export default reduxForm as TypedReduxForm;