"use client"

import React from 'react'
import Image from 'next/image'
import CustomLink from './CustomLink'
import { motion } from 'motion/react'

interface Project {
    id: number,
    title: string,
    date: string,
    summary: string,
    img: string,
    alt: string,
    tags: string[],
    link1: string,
    link2: string
}

export default function ProjectCard({project}: {project: Project}) {


  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='bg-light-purple bg-opacity-10 flex flex-col items-center text-light-purple rounded shadow max-w-4xl p-4 mx-2 md:px-24 md:py-8 my-6 md:my-10'
    >
      <h3 className='text-2xl md:text-3xl font-bold'>{project.title}</h3>
      <p className='text-md mb-8 mt-2'>{project.date}</p>
      <p className='text-md md:text-lg text-left'>{project.summary}</p>      
      <Image 
        src={project.img}
        alt={project.alt}
        sizes='100vw'
        width={0}
        height={0}
        style={{borderRadius: '5px', border: '1px solid #37183b', width: '100%', margin: '16px 0', height: 'auto'}}
      />      
      <ul className='flex flex-row font-bold flex-wrap text-md md:text-lg list-[circle] gap-x-6 justify-center mb-8 list-inside'>
        {
          project.tags.map((tag: string, index: number) => {return <li key={index}>{tag}</li>})
        }
      </ul>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <CustomLink
          text={'Demo & Details'}
          style={'primary'}
          destination={project.link1}
          newWindow={false}
        />
        <CustomLink
          text={'Visit Website'}
          style={'secondary'}
          destination={project.link2}
          newWindow={true}
        />
      </div>    
  </motion.div>
  )
}
