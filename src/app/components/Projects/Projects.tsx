import React from 'react'
import Title from '../Title'
import CardProject from './CardProject'

const Projects = () => {

  const projects = [
    {
      img: '/images/myProjects/admin.png',
      githubLink: 'https://github.com/ericky0/qikertAdmin',
      websiteLink: 'a',
      title: 'qikertAdmin',
      desc: 'qikertAdmin é um painel de administrador profissional, simples e efetivo, você pode gerenciar tudo no seu website.',
    },
    {
      img: '/images/myProjects/airbnb.png',
      githubLink: 'https://github.com/ericky0/qikertAdmin',
      websiteLink: 'a',
      title: 'BnBClone',
      desc: 'Descubra acomodações e tenha experiências únicas ao redor do mundo.',
    },
    {
      img: '/images/myProjects/ecommerce.png',
      githubLink: 'https://github.com/ericky0/qikertAdmin',
      websiteLink: 'a',
      title: 'AskE Ecommerce',
      desc: 'Um Ecommerce profissional e completamente funcional, com telas extremamente atrativas.',
    },
    {
      img: '/images/myProjects/facebook.gif',
      githubLink: 'https://github.com/ericky0/qikertAdmin',
      websiteLink: 'a',
      title: 'RealSocial',
      desc: 'Conecte-se com seus amigos e o mundo em volta de você.',
    },
    {
      img: '/images/myProjects/youtube.gif',
      githubLink: 'https://github.com/ericky0/qikertAdmin',
      websiteLink: 'a',
      title: 'AskTube',
      desc: 'Elevando a experiência de vídeos para outro nível com esse clone do YouTube.',
    },
    {
      img: '/images/myProjects/twitter.gif',
      githubLink: 'https://github.com/ericky0/qikertAdmin',
      websiteLink: 'a',
      title: 'AskTwitter',
      desc: 'Trazendo o poder das mídias sociais para as pontas dos seus dedos.',
    },

  ]

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