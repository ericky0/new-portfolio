import React from 'react'

interface TitleProps {
  title: string
  small?: boolean
  color?: boolean
}

const Title = ({title, small, color}: TitleProps) => {
  return (
    <h1 className={`
      
      
      text-center
      break-normal
      text-transparent
      bg-clip-text 
      bg-gradient-to-r 
      ${small ? 'text-3xl' : 'text-6xl'}
      ${small ? 'max-w-xl' : 'max-w-2xl'}
      ${color ? 'from-purple-400' : 'from-stone-400'}
      ${color ? 'to-pink-600' : 'to-stone-800'}
      `}>
      {title}
    </h1>
  )
}

export default Title