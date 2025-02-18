"use client"

import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'motion/react'

export default function ProjectCard({project}) {

  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='bg-light-purple bg-opacity-10 flex flex-col items-center text-light-purple rounded shadow max-w-4xl p-4 mx-2 md:px-36 md:py-8 my-6 md:my-10'
    key={project.id}
    >
      <h3 className='text-2xl md:text-3xl font-bold mb-8'>{project.title}</h3>
      <p className='text-md md:text-lg text-left'>{project.summary}</p>      
      <Image 
        src={project.img}
        alt={project.alt}
        sizes='100vw'
        width={0}
        height={0}
        style={{borderRadius: '5px', border: '1px solid #37183b', width: '100%', margin: '16px 0', height: 'auto'}}
      />      
      <ul className='flex flex-row font-bold flex-wrap text-md md:text-lg list-[circle] gap-x-8 justify-center mb-8'>
        {
          project.tags.map((tag) => {return <li>{tag}</li>})
        }
      </ul>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <Button
          text={'Demo & Details'}
          style={'primary'}
          type={'link'}
          destination={project.link1}
          newWindow={false}
        />
        <Button
          text={'Visit Website'}
          style={'primary'}
          type={'link'}
          destination={project.link2}
          newWindow={true}
        />
      </div>    
  </motion.div>
  )
}
