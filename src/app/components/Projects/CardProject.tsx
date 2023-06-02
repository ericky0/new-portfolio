'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'


const CardProject = () => {

return (
    <div className='
      flex 
      flex-col 
      gap-4
      max-w-[14rem] 
      mt-16
      duration-300
      w-56
      bg-neutral-100 
      items-center 
      p-4 
      rounded-md
      hover:grayscale
    '>
      <div className='
        w-[100%]
        h-44
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
        <motion.div
          whileHover={{opacity: [0, 1]}}
          transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
          className="
            absolute
            w-[100%]
            h-[100%]
            flex
            items-center
            justify-center
            gap-4
            bg-[rgba(0,0,0,0.4)]
          "
        >
          <a href='' target='_blank'>
            <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale: [1, 0.9]}}
              transition={{duration: 0.25}}
              className="
                flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(0,0,0,0.8)]
              "
            >
              <AiFillEye className='w-8 h-8 text-white'/>
            </motion.div>
          </a>
          <a href='' target='_blank'>
            <motion.div
              whileInView={{scale: [0, 1]}}
              whileHover={{scale: [1, 0.9]}}
              transition={{duration: 0.25}}
              className="
                flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(0,0,0,0.8)]
              "
            >
              <AiFillGithub className='w-8 h-8 text-white'/>
            </motion.div>
          </a>
        </motion.div>
      </div>
      <p className='
        font-bold 
        text-lg
        text-neutral-600
      '>
        NodeJS Developer
      </p>
        <p className='
          font-light 
          text-sm 
          break-words
          text-neutral-500
          '>
          Sou especialista no desenvolvimento de aplicações web escaláveis e de alto desempenho. Sou hábil em criar soluções que sejam eficientes e confiáveis.
        </p>
    </div>
  )
}

export default CardProject