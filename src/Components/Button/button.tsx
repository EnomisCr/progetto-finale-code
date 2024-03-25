import React, { ComponentProps } from 'react'

export const Button = (props: ComponentProps<'button'>) => {
  const { children, ...attrs } = props;
  return <button {...attrs} className='btn btn-primary'>{children}</button>

}