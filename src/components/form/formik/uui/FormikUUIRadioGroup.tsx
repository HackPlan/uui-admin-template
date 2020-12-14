import { Radio, RadioGroup, RadioGroupProps, RadioProps } from "@hackplan/uui"
import React from "react"
import { withFormikUUIField } from "./withFormikUUIField"

function FormikUUIRadioGroupWrapper(props: RadioGroupProps & { options: RadioProps[] }) {
  return (
    <RadioGroup {...props}>
      {props.options.map((option) => {
        return (
          <Radio key={option.value} {...option} />
        )
      })}
    </RadioGroup>
  )
}

export const FormikUUIRadioGroup = withFormikUUIField(FormikUUIRadioGroupWrapper)

