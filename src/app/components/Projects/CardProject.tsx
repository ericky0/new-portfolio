'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

interface CardProjectProps {
  img: string
  githubLink: string
  websiteLink?: string | null
  title: string
  desc: string

}


const CardProject = ({img, githubLink, websiteLink, title, desc}: CardProjectProps) => {

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
          src={img} 
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
            opacity-0
            bg-[rgba(0,0,0,0.4)]
          "
        >
          {websiteLink && (
            <a href={websiteLink} target='_blank'>
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
          )}
          <a href={githubLink} target='_blank'>
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
        {title}
      </p>
        <p className='
          font-light 
          text-sm 
          break-words
          text-neutral-500
          '>
          {desc}
        </p>
    </div>
  )
}

export default CardProject