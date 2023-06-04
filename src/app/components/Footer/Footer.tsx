import { social } from '@/app/data/Social'
import React from 'react'

const Footer = () => {
  social

  return (
    <div className='flex justify-between py-8 text-neutral-500'>
      <p className='font-light text-sm'>© 2023 All rights reserved.</p>
      <div className='flex gap-6'>
        {social.map((social) => (
          <a href={social.link} target='_blank' className='font-light text-sm hover:text-slate-100 transition-all' key={social.name}>
            {social.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer