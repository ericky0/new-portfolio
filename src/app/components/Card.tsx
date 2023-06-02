'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const Card = () => {

return (
    <div className='
      flex 
      flex-col 
      gap-4
      max-w-[14rem] 
      mt-16
      hover:scale-110
      duration-300
      w-56
    '>
      <div className='
        w-[100%]
        h-56  
        relative 
        overflow-hidden 
        rounded-md
        '>
        <Image 
          src='/images/myskills/node.jpg' 
          fill 
          className='absolute object-cover' 
          alt='skill'
        />
      </div>
      <p className='
        font-bold 
        text-lg
        text-neutral-200
      '>
        NodeJS Developer
      </p>
        <p className='
            font-light 
            text-sm 
            break-words
            text-neutral-400
          '>
          Sou especialista no desenvolvimento de aplicações web escaláveis e de alto desempenho. Sou hábil em criar soluções que sejam eficientes e confiáveis.
        </p>
    </div>
  )
}

export default Card