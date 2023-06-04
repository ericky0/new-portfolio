import { social } from '@/app/data/Social'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const Navbar = () => {

  social
  
  return (
    <nav
      className='
        flex
        flex-row
        justify-between
        items-center
        border-b
        border-zinc-800
        pt-4
        pb-4
        text-sm
      '
    >
      <div className='flex gap-4 items-center group'>
        <div className='
          w-14
          h-14
          rounded-full
          bg-zinc-900
          flex
          justify-center
          items-center
          border-2
          border-neutral-800
          transition-all
          group-hover:border-neutral-700
        '>
          <AiOutlineMail size={20}/>
        </div>
        <a href='mailto:erickkhogarth@gmail.com?subject=Oi%20Erick!%20&body=Digite%20o%20assunto%20a%20ser%20discutido%20aqui' className='font-light group-hover:text-slate-100 transition-all'>
          Entre em contato
        </a>
      </div>
      <div className='flex gap-6'>
        {social.map((social) => (
          <a href={social.link} target='_blank' className='font-light hover:text-slate-100 transition-all' key={social.name}>
            {social.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar