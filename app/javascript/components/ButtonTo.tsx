import React, { PropsWithChildren } from 'react'
import { SubmitProps } from '@thoughtbot/candy_wrapper'
import { Form, FormProps } from './'

export type ButtonToProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "form"> & FormProps<{
  submit?: SubmitProps
}> 

export const ButtonTo = ({form, extras, inputs, children, ...rest}: PropsWithChildren<ButtonToProps>) => {
  const btnSubmit = (inputs && inputs.submit) ?
    <button className="syos-button" {...inputs.submit} {...rest}>{inputs.submit.text}</button> :
    <button className="syos-button" type="submit" {...rest}>{ children }</button>;

  return (
    <Form {...form} extras={extras}>
      {btnSubmit}
    </Form>
  )
}
