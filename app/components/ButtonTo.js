import React from 'react'

export default ({props, extras, inputs, children, ...rest}) => {
  const btnSubmit = (inputs && inputs.submit) ?
    <button {...inputs.submit} {...rest}>{inputs.submit.text}</button> :
    <button type="submit" {...rest}>{ children }</button>;

  return (
    <form {...props}>
      {Object.values(extras).map((hiddenProps) => (<input {...hiddenProps} key={hiddenProps.name}/>))}
      {btnSubmit}
    </form>
  )
}
