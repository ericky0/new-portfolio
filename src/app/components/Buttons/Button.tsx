import React from 'react'
import { IconType } from 'react-icons/lib'

interface ButtonProps {
  text: string
  icon?: IconType
  className?: string
}

const Button = ({text, icon: Icon, className}: ButtonProps) => {
  return (
    <button className={`
      flex 
      flex-row 
      items-center 
      gap-4 
      py-4 
      px-8 
      bg-neutral-800 
      rounded border 
      border-neutral-700 
      font-light 
      duration-200
      hover:scale-110
      ${className}
    `}>
      {text}
      {Icon && <Icon />}
    </button>
  )
}

export default Button