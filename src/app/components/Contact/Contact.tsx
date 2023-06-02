import React from 'react'
import Title from '../Title'
import Button from '../Buttons/Button'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  return (
    <div
      className='py-32 border-b border-neutral-800'
    >
      <Title title='Entre em contato' animate/>
      <div className='flex gap-4 justify-center pt-10'>
        <Button text='Email' icon={AiOutlineMail}/>
        <Button text='WhatsApp' icon={AiOutlineWhatsApp}/>
      </div>
    </div>
  )
}

export default Contact