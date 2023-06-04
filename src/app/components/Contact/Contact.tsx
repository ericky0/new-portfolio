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
        <a href="mailto:erickkhogarth@gmail.com?subject=Oi%20Erick!%20&body=Digite%20o%20assunto%20a%20ser%20discutido%20aqui"><Button text='Email' icon={AiOutlineMail}/></a>
        <a href="https://api.whatsapp.com/send?phone=5585989315013&text=Oi%20Erick,%20eu%20gostaria%20de%20falar%20com%20voc%C3%AA!" target='_blank'><Button text='WhatsApp' icon={AiOutlineWhatsApp}/></a>
      </div>
    </div>
  )
}

export default Contact