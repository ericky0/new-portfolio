'use client';

import Image from 'next/image'
import SlickSlider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useWindowSize from '@/app/hooks/useWindowSize';
import { useEffect, useState } from 'react';
import { slides } from '@/app/data/Slides';






const Slider = () => {

  slides

  const windowSize = useWindowSize()
  let width = windowSize.width
  
  const [amountSlides, setAmountSlides] = useState(0)

  useEffect(() => {
    if (width) {
      if (width >= 1536) {
        setAmountSlides(4)
      } else if (width >= 1024) {
        setAmountSlides(3)
      } else if (width >= 768) {
        setAmountSlides(2)
      }
    }
  }, [width])

  const settings = {
    slidesToShow: amountSlides,
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