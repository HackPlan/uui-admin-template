import { Checkbox, TextField, NumberField, TextArea, DatePicker, Select, HTMLSelect, Slider, Stepper } from "@hackplan/uui"
import { Switch } from "react-router-dom"
import { withFormikUUIField } from "./withFormikUUIField"

export const FormikUUISwitch = withFormikUUIField(Switch)
export const FormikUUICheckbox = withFormikUUIField(Checkbox)
export const FormikUUITextField = withFormikUUIField(TextField)
export const FormikUUINumberField = withFormikUUIField(NumberField)
export const FormikUUITextArea = withFormikUUIField(TextArea)
export const FormikUUIDatePicker = withFormikUUIField(DatePicker)
export const FormikUUISelect = withFormikUUIField(Select)
export const FormikUUIHTMLSelect = withFormikUUIField(HTMLSelect)
export const FormikUUISlider = withFormikUUIField(Slider)
export const FormikUUIStepper = withFormikUUIField(Stepper)

