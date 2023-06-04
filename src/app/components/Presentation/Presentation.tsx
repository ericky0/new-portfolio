'use client'

import React from 'react'
import Image from 'next/image'
import Title from '../Title'
import Button from '../Buttons/Button'
import { Link as ButtonLink } from 'react-scroll'
import { ImArrowUpRight2 } from 'react-icons/im'

const Presentation = () => {



  return (
    <div className='flex flex-col items-center my-32 w-full break-keep'>
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
      <p className='text-xl my-4 hover:brightness-125 transition-all'>Oi, eu sou o Erick 👋</p>
      <Title title='DESENVOLVEDOR FULLSTACK' color animate/>
      <Title title='CONSTRUINDO PRODUTOS DIGITAIS' color animate/>
      <Title title='E EXPERIÊNCIAS ÚNICAS' color animate/>
      <ButtonLink to='projects' smooth={true} duration={800} offset={-300}>
        <Button text='Ultimos Projetos' icon={ImArrowUpRight2} className='mt-12'/>
      </ButtonLink>
      
    </div>
  )
}

export default Presentation