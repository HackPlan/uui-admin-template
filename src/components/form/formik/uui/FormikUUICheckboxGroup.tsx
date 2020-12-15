import React from "react"
import { CheckboxProps, Checkbox } from "@hackplan/uui"
import { withFormikUUIField } from "./withFormikUUIField"

export interface CheckboxGroupProps {
  value: string[];
  onChange: (value: string[]) => void;

  onFocus?: React.FocusEventHandler<HTMLLabelElement>;
  onBlur?: React.FocusEventHandler<HTMLLabelElement>;
}

function FormikUUICheckboxGroupWrapper(props: CheckboxGroupProps & { options: CheckboxProps[] }) {
  return (
    <div className="flex flex-col">
      {props.options.map((option) => {
        const checked = !!option.value && props.value.includes(option.value)
        return (
          <Checkbox
            key={option.value}
            {...option}
            checked={checked}
            onChange={(value) => {
              if (!option.value) return;
              const newValueSet = new Set(props.value)
              if (value) {
                newValueSet.add(option.value)
              } else {
                newValueSet.delete(option.value)
              }
              const newValue = Array.from(newValueSet)
              props.onChange(newValue)
            }}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
        )
      })}
    </div>
  )
}

export const FormikUUICheckboxGroup = withFormikUUIField(FormikUUICheckboxGroupWrapper)

