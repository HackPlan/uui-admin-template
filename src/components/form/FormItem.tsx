import React from 'react';
import classNames from 'classnames';
import "./FormItem.scss";

export interface FormItemProps {
  label: React.ReactNode;
  labelFor?: string;
  children: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
}

export function FormItem(props: FormItemProps) {
  return (
    <div className="TSWeb-FormItem-Root">
      <label
        className={classNames("TSWeb-FormItem-Label", { "required": !!props.required })}
        htmlFor={props.labelFor}
      >
        {props.label}
      </label>
      <div className="TSWeb-FormItem-Content">{props.children}</div>
      <div className="TSWeb-FormItem-Error">{props.error}</div>
    </div>
  )
}