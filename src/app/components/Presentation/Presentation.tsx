import React from 'react'
import Image from 'next/image'
import Title from '../Title'
import Button from '../Buttons/Button'
import { ImArrowUpRight2 } from 'react-icons/im'

const Presentation = () => {
  return (
    <div className='flex flex-col items-center my-32 gap-4'>
      <div className='
        w-40 
        h-40 
        rounded-full 
        relative 
        overflow-hidden 
        border-2 
        border-violet-900
        bg-gradient-to-br
        from-neutral-800
        to-neutral-900
      '>
        <Image src='/images/eudnv.png' alt='my profile picture' className='absolute object-cover' fill/>
      </div>
      <p className='text-xl'>Oi, eu sou o Erick 👋</p>
      <Title title='Construção de produtos digitais, marcas e experiência.' color/>
      <Button text='Ultimos Projetos' icon={ImArrowUpRight2} className='mt-8'/>
    </div>
  )
}

export default Presentation