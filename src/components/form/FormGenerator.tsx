import React, { useMemo } from 'react';
import * as Yup from 'yup';
import type { Asserts } from 'yup';
import type { ObjectShape, OptionalObjectSchema, TypeOfShape } from 'yup/lib/object';
import { Field, FieldConfig, Formik, FormikConfig } from 'formik';
import { mapValues, merge, values } from 'lodash';
import { FormikUUICheckbox, FormikUUIDatePicker, FormikUUINumberField, FormikUUITextField } from './formik';
import { FormItem } from './FormItem';


export type FormGeneratorSchema<TShape extends ObjectShape> = OptionalObjectSchema<TShape, Record<string, any>, TypeOfShape<TShape>>
export type FormGeneratorInitialValue<
  TShape extends ObjectShape,
  Schema extends FormGeneratorSchema<TShape>,
> = Asserts<Schema>;
export type FormGeneratorComponent<
  TShape extends ObjectShape,
  Schema extends FormGeneratorSchema<TShape>,
> = {
  // [key in keyof Asserts<Schema>]?: FieldConfig['component'];
  // [key in keyof Asserts<Schema>]?: Asserts<Schema>[key] extends object ? {
  //   [key in keyof Asserts<FormGeneratorSchema<Schema['fields']>>]?:
  // };
  [key in keyof Asserts<Schema>]?: Asserts<Schema>[key] extends object
    ? FormGeneratorComponent<Schema['fields'], FormGeneratorSchema<TShape>>
    : React.ComponentType<any>;
}

export interface FormGeneratorOptions<
  TShape extends ObjectShape,
  Schema extends FormGeneratorSchema<TShape>,
> {
  schema: Schema;
  initialValue?: FormGeneratorInitialValue<TShape, Schema>;
  component?: FormGeneratorComponent<TShape, Schema>;
  onSubmit: FormikConfig<FormGeneratorInitialValue<TShape, Schema>>['onSubmit'];
}

export function FormGenerator<
  TShape extends ObjectShape,
  Schema extends OptionalObjectSchema<TShape, Record<string, any>, TypeOfShape<TShape>>,
>(
  options: FormGeneratorOptions<TShape, Schema>,
) {

  const defaultInitialValues = generateDefaultInitialValue(options.schema)
  const finalInitialValues = merge(defaultInitialValues, options.initialValue)

  const defaultComponents = generateDefaultComponent(options.schema)
  const finalComponents = merge(defaultComponents, options.component)

  return (props: {}) => {
    return (
      <Formik
        initialValues={finalInitialValues}
        onSubmit={options.onSubmit}
      >
        {renderForm(options.schema, finalComponents)}
      </Formik>
    )
  }
}

function generateDefaultInitialValue<
  TShape extends ObjectShape,
  Schema extends FormGeneratorSchema<TShape>,
>(schema: Schema): FormGeneratorInitialValue<TShape, Schema> {
  return mapValues(schema.fields, (value: Yup.BaseSchema) => {
    switch (value.type) {
      case 'object': return generateDefaultInitialValue(value as any);
      case 'string': return '';
      case 'number': return 0;
      case 'boolean': return false;
      case 'date': return null;
      case 'array': return [];
      case 'mixed': return null;
    }
  }) as any
}
function generateDefaultComponent<
  TShape extends ObjectShape,
  Schema extends FormGeneratorSchema<TShape>,
>(schema: Schema): FormGeneratorComponent<TShape, Schema> {
  return mapValues(schema.fields, (value: Yup.BaseSchema) => {
    switch (value.type) {
      case 'object': return generateDefaultComponent(value as any);
      case 'string': return FormikUUITextField;
      case 'number': return FormikUUINumberField;
      case 'boolean': return FormikUUICheckbox;
      case 'date': return FormikUUIDatePicker;
      case 'array': return () => null;
      case 'mixed': return () => null;
    }
  }) as any
}
function renderForm<
  TShape extends ObjectShape,
  Schema extends FormGeneratorSchema<TShape>,
>(schema: Schema, components: FormGeneratorComponent<TShape, Schema>): React.ReactNode {
  return (
    <div>
      {values(mapValues(schema.fields, (value: Yup.BaseSchema, key: string) => {
        switch (value.type) {
          case 'object': {
            return (
              <div>
                <div>{value.spec.label}</div>
                <div className="ml-8">
                  {renderForm(value as any, components[key] as any)}
                </div>
              </div>
            )
          }
          default: {
            if (!components[key]) return <div>unsupported</div>
            console.log(key, components[key])
            return (
              <FormItem label={value.spec.label} labelFor={key}>
                <Field
                  name={key}
                  component={components[key] || null}
                />
              </FormItem>
            )
          }
        }
      }))}
    </div>
  )
}

//===============================================================================================
//===============================================================================================
//===============================================================================================
//===============================================================================================
//===============================================================================================
//===============================================================================================
