'use client';

import React from 'react'
import Image from 'next/image'
import SlickSlider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Slider = () => {
  
  const slides = [
    {
      scale: '2',
      name: 'firebase.png'
    },
    {
      scale: '1.5',
      name: 'git.png',
    },
    {
      scale: '1.5',
      name: 'javascript.png',
    },
    {
      scale: '1',
      name: 'mongo.png',
    },
    {
      scale: '2',
      name: 'nextjs.png',
    },
    {
      scale: '1.5',
      name: 'node.png',
    },
    {
      scale: '1',
      name: 'react.png',
    },
    {
      scale: '2',
      name: 'typescript.png',
    },
  ]

  const settings = {
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
  }

  return (
    <div
      className='
        h-36  
        bg-zinc-900
        flex 
        items-center 
        border-y 
        border-neutral-800 
    '>
      <SlickSlider {...settings} className='overflow-hidden'>
        {slides.map((slide) => (
          <div key={slide.name} className='
            min-w-[186px] 
            basis-1/4 
            h-11 
            relative 
            shrink-0
          '>
            <Image src={`/images/technologies/${slide.name}`} alt='slide' fill className={`absolute object-contain pointer-events-none scale-[${slide.scale}] `}/>
          </div>
        ))}
      </SlickSlider>
    </div>
  )
}

export default Slider