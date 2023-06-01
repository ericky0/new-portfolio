import React from 'react'
import Image from 'next/image'

const Slider = () => {
  const slides = [
    {
      scale: 2,
      name: 'firebase.png'
    },
    {
      scale: 1.5,
      name: 'git.png',
    },
    {
      scale: 1.5,
      name: 'javascript.png',
    },
    {
      scale: 1,
      name: 'mongo.png',
    },
    {
      scale: 1.5,
      name: 'nextjs.png',
    },
    {
      scale: 1,
      name: 'node.png',
    },
    {
      scale: 1,
      name: 'react.png',
    },
    {
      scale: 2,
      name: 'typescript.png',
    },
  ]
  return (
    <div className='h-36  bg-zinc-900 flex items-center border-y border-neutral-800 flex-nowrap overflow-x-auto'>
      {slides.map((slide) => (
        <div key={slide.name} className='min-w-[186px] basis-1/4 h-11 relative shrink-0'>
          <Image src={`/images/technologies/${slide.name}`} alt='slide' fill className={`absolute object-contain scale-[${slide.scale}]`}/>
        </div>
      ))}
    </div>
  )
}

export default Slider