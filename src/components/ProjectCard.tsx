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
    links: [string, string, string],
}

export default function ProjectCard({project}: {project: Project}) {


  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='bg-light-purple bg-opacity-10 flex flex-col text-light-purple rounded shadow max-w-4xl p-4 md:px-24 md:py-8 text-left md:text-center'
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
      <ul className='flex flex-row flex-wrap text-md md:text-lg gap-x-4 gap-y-2 justify-start md:justify-center mb-10 list-inside '>
        {
          project.tags.map((tag: string, index: number) => {return <li key={index} className='bg-main-purple md:bg-none px-1'>{tag}</li>})
        }
      </ul>
      <div className="flex flex-row gap-4 flex-wrap justify-start lg:justify-center">
        <CustomLink
          text={'Demo & Details'}
          style={'primary'}
          destination={project.links[0]}
          newWindow={false}
        />
        <CustomLink
          text={'Visit Website'}
          style={'secondary'}
          destination={project.links[1]}
          newWindow={true}
        />
        <CustomLink
          text={'View Code'}
          style={'secondary'}
          destination={project.links[2]}
          newWindow={true}
        />
      </div>    
  </motion.div>
  )
}
