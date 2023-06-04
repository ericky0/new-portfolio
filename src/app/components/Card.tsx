'use client'

import Image from 'next/image'
import React from 'react'

interface CardProps {
  title: string
  img: string
  desc: string
}


const Card = ({ title, img, desc }: CardProps) => {

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
          src={img} 
          fill 
          className='absolute object-cover' 
          alt='skill'
          sizes='100vw'
        />
      </div>
      <p className='
        font-bold 
        text-lg
        text-neutral-200
      '>
        {title}
      </p>
        <p className='
            font-light 
            text-sm 
            break-words
            text-neutral-400
          '>
          {desc}
        </p>
    </div>
  )
}

export default Card