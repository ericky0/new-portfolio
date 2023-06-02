import React from 'react'
import Title from '../Title'
import Card from '../Card'

const Skills = () => {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Skills