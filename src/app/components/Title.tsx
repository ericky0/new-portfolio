'use client';

import { Rubik } from 'next/font/google';
import React, { MouseEvent, useEffect, useState } from 'react'

const rubik = Rubik({ subsets: ['latin'] })


interface TitleProps {
  title: string
  small?: boolean
  color?: boolean
}
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const Title = ({title, small, color}: TitleProps) => {


  const [originalTitle, setOriginalTitle] = useState(title)

  const startAnimation = (e: MouseEvent) => {
    const target = e.target as HTMLHeadingElement

    let iterations = 0

    const interval = setInterval(() => {
      target.innerText = target.innerText.split('')
      .map((letter, index) => {
        if (index < iterations) {
          return title[index]
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join('')

      if (iterations >= title.length) clearInterval(interval)

      iterations += 1 / 2
    }, 30)

    
  }

  return (
  <h1 
    onMouseEnter={startAnimation}
    className={`
      text-transparent
      bg-clip-text 
      bg-gradient-to-r
      text-center
      leading-normal
      brightness-100
      hover:brightness-150
      ${rubik.className}
      ${small ? 'text-3xl' : 'text-5xl'}
      ${color ? 'from-pink-600' : 'from-stone-400'}
      ${color ? 'to-zinc-800' : 'to-stone-800'}
      `}>
      {originalTitle}
    </h1>
  )
}

export default Title