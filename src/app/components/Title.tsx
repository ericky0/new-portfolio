'use client';

import { Rubik } from 'next/font/google';
import React, { MouseEvent, useEffect, useState } from 'react'

const rubik = Rubik({ subsets: ['latin'] })


interface TitleProps {
  title: string
  small?: boolean
  color?: boolean
  animate?: boolean
}
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const Title = ({title, small, color, animate}: TitleProps) => {

  const startAnimation = (e: MouseEvent) => {
    const target = e.target as HTMLHeadingElement

    let iterations = 0

    const interval = setInterval(() => {
      target.innerText = target.innerText.split('')
      .map((letter, index) => {
        if (letter === ' ' || index < iterations) {
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
      onMouseEnter={animate === true ? startAnimation : () => {}}
      className={`
        text-transparent
        bg-clip-text 
        bg-gradient-to-r
        text-center
        brightness-100
        hover:brightness-150
        transition-all
        pt-2
        ${rubik.className}
        ${small ? 'text-3xl md:text-3xl lg:text-3xl' : 'lg:text-5xl md:text-4xl text-2xl'}
        ${color ? 'from-pink-600' : 'from-neutral-100'}
        ${color ? 'to-neutral-300' : 'to-neutral-600'}
        `}>
        {title}
      </h1>
  )
}

export default Title