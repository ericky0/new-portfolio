import React from 'react'
import Title from '../Title'
import CardProject from './CardProject'
import { projects } from '@/app/data/Projects'

const Projects = () => {

  projects

  return (
    <div className='border-b border-neutral-800 pb-32' id='projects'>
      <Title title='Dê uma olhada em alguns dos meus projetos.' small />
      <div className='
          my-4
          flex
          flex-wrap
          gap-20
          shrink
          justify-center
        '>
        {projects.map((project) => (
          <CardProject key={project.title} desc={project.desc} githubLink={project.githubLink} img={project.img} title={project.title} websiteLink={project.websiteLink}/>
        ))}
      </div>
    </div>
  )
}

export default Projects