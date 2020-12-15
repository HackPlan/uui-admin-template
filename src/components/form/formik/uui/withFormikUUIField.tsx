import classNames from 'classnames';
import { FieldProps } from 'formik';
import { get, omit } from 'lodash';
import React from 'react';

export interface FormikUUIComponentProps {
  onChangeAfter?: (value: any) => void;
  onBlurAfter?: () => void;
}

/**
 * HOC for `Formik` accepted `Field` components base on `UUI` form components
 *
 * @param WrappedUUIFormComponent `UUI` form component (`TextField` | `Checkbox` | `Select`)
 */
export function withFormikUUIField<P>(WrappedUUIFormComponent: React.ComponentType<P>) {
  type Props = FormikUUIComponentProps & P & FieldProps
  return function FormikUUIComponent(props: Props) {
    const { field, form } = props
    const error = !!get(form.errors, field.name)
    const componentProps = omit(props, 'onChangeAfter', 'onBlurAfter') as Exclude<Props, 'onChangeAfter' | 'onBlurAfter'>
    return (
      <WrappedUUIFormComponent
        id={field.name}
        checked={field.value}
        value={field.value}
        onBlur={() => {
          form.setFieldTouched(field.name, true);
          props.onBlurAfter && props.onBlurAfter()
        }}
        onChange={(value: any) => {
          form.setFieldValue(field.name, value);
          props.onChangeAfter && props.onChangeAfter(value)
        }}
        {...componentProps}
        className={classNames((props as any)['className'], {
          'error': error
        })}
      />
    )
  }
}