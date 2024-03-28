import React, { ComponentProps } from 'react'
import "./Loginbutton.css"

export const LoginButton = (props: ComponentProps<'button'>) => {
  const { children, ...attrs } = props;
  return <button {...attrs} className='btn lgn-btn'>{children}</button>

}