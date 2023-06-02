import React from 'react'
import Title from '../Title'
import CardProject from './CardProject'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-32'>
      <Title title='Dê uma olhada em alguns dos meus projetos.' small />
      <div className='
          my-4
          flex
          flex-wrap
          gap-20
          shrink
          justify-center
        '>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </div>
  )
}

export default Projects