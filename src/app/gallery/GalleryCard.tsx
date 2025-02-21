import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { li } from 'motion/react-client'

interface GalleryProject {
    title: string,
    img: string,
    alt: string,
    tags: string[],
    date: string
}

export default function GalleryCard({project}: {project: GalleryProject}) {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='bg-light-purple bg-opacity-60 flex flex-col text-left text-main-purple rounded shadow max-w-80 p-4'
    >
        <Image 
            src={project.img}
            alt={project.alt}
            sizes='100vw'
            width={0}
            height={0}
            style={{borderRadius: '5px', border: '1px solid #37183b', width: '100%', height: 'auto'}}
        />
        <h3 className='text-xl my-2 font-bold'>{project.title}</h3>
        <p className='text-md mb-2'>{project.date}</p>
        <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7}}
            className='text-sm text-accent-orange flex flex-row gap-2 flex-wrap'
        >
            {project.tags.map((tag, index) => <li key={index} className='bg-main-purple px-1'>{tag}</li>)}
        </motion.ul>
    </motion.div>
  )
}
