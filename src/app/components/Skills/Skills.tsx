import React from 'react'
import Title from '../Title'
import Card from '../Card'

const Skills = () => {


  const mySkills = [
    {
      title: 'Desenvolvedor BackEnd',
      desc: 'Sou especialista no desenvolvimento de aplicações web escaláveis e de alto desempenho. Sou hábil em criar soluções que sejam eficientes e confiáveis.',
      img: '/images/myskills/backend.jpg'
    },
    {
      title: 'Desenvolvedor FrontEnd',
      desc: 'Como desenvolvedor Frontend, meu foco é criar interfaces de usuário atraentes e funcionais. Sou habilidoso em traduzir designs em código e utilizo as melhores práticas de desenvolvimento web.',
      img: '/images/myskills/frontend.jpg'
    },
    {
      title: 'Desenvolvedor JavaScript',
      desc: 'Sou especialista em tecnologias que usam JavaScript, uma das linguagens de programação mais populares. Tenho vasta experiência no desenvolvimento de aplicações web dinâmicas e interativas.',
      img: '/images/myskills/javascript.png'
    },
    {
      title: 'Desenvolvedor TypeScript',
      desc: 'Com TypeScript, combino a familiaridade do JavaScript com a adição de tipagem estática e recursos avançados. Isso permite um desenvolvimento mais robusto e escalável, além de proporcionar maior segurança no código.',
      img: '/images/myskills/typescript.png'
    },
    {
      title: 'Desenvolvedor NodeJS',
      desc: 'Utilizo o Node.js para criar aplicações web escaláveis e eficientes, com alta capacidade de processamento assíncrono. Tenho experiência em construir APIs RESTful, manipular bancos de dados e implementar integrações com outros serviços, oferecendo soluções completas e confiáveis.',
      img: '/images/myskills/node.jpg'
    },
    {
      title: 'Desenvolvedor ReactJS',
      desc: 'Utilizo esse framework para criar interfaces de usuário interativas e reativas. Tenho profundo conhecimento em componentes reutilizáveis, gerenciamento de estado e roteamento, o que me permite construir aplicações web de alta performance e escalabilidade.',
      img: '/images/myskills/reactjs.png'
    },
    {
      title: 'Desenvolvedor NextJS',
      desc: 'Com o Next.js, posso criar aplicações rápidas, escaláveis e otimizadas para SEO. Utilizo recursos avançados como pré-renderização estática e geração de páginas dinâmicas, proporcionando uma experiência de usuário de alta qualidade.',
      img: '/images/myskills/next.png'
    },
    {
      title: 'Banco de dados',
      desc: 'Tenho experiência em projetar e otimizar estruturas de dados eficientes e escaláveis. Sou habilidoso em trabalhar com diversos sistemas de gerenciamento de bancos de dados, como PostgreSQL e MongoDB.',
      img: '/images/myskills/bancodedados.png'
    },
  ]

  return (
    <div className='my-32 border-b border-neutral-800 pb-28'>
      <Title title='Eu sei que um desenvolvimento de qualidade é fundamental para impulsionar negócios de sucesso.' small/>

      <div className='
        my-4
        grid 
        xl:grid-cols-4
        md:grid-cols-3
        sm:grid-cols-2
        grid-cols-1
        gap-2
        justify-items-center
      '>
        {mySkills.map((skill) => (
            <Card desc={skill.desc} img={skill.img} title={skill.title} key={skill.title}/>
        ))}
      </div>
    </div>
  )
}

export default Skills