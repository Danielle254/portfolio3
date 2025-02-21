"use client"

import React, { useState } from 'react'
import Button from './Button'
import { motion } from 'motion/react'
import {RotatingLines} from 'react-loader-spinner'

type ProjectProps = {
    title: string,
    demo: string,
    description: string,
    tech: string[],
    heading: string,
    features: string[],
    skills: string[],
    learnings: string,
    future: string,
    links: {title: string, link: string}[]
}

export default function ProjectDetailPage({project}: {project: ProjectProps}) {
    const [videoIsLoading, setVideoIsLoading] = useState(true);

    function hideSpinner () {
        setVideoIsLoading(false);
    }
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='max-w-3xl mx-auto pt-8 mb-24 px-4 lg:px-0 text-light-purple text-left'
    >
        <h2 className='text-4xl mb-10 text-accent-orange text-center'>{project.title}</h2>
        <h3 className='text-2xl font-bold mb-4'>Demo:</h3>
        <div className='relative mx-auto h-0 pb-[56%] lg:pb-[56%]'>
            {videoIsLoading ? 
            <div className='flex flex-col items-center'>
              <RotatingLines
                visible={true}
                width="96"
                strokeColor="pink"
                strokeWidth="4"
                animationDuration="0.99"
                ariaLabel="rotating-lines-loading"
                /></div> : null}
            <iframe className='absolute w-full h-full left-0 top-0 border border-main-pink rounded' src={project.demo}  allowFullScreen title='screenshare demo of project website features' onLoad={hideSpinner}></iframe>
        </div>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        >
            <h3 className='text-2xl font-bold mt-10 mb-4'>Technologies Used: </h3>
            <ul className='flex flex-row flex-wrap text-lg text-accent-orange gap-x-10 justify-start mb-10 list-[circle] ml-6 marker:text-light-purple'>
            {project.tech.map((each, index) => <li key={index}>{each}</li>)}
            </ul>
        </motion.section>
        <p className='text-lg/8 whitespace-pre-line'>{project.description}</p>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        >
            <h3 className='text-2xl font-bold mt-10 mb-4'>{project.heading}</h3>
            <ul className='list-disc text-lg/8 ml-6 marker:text-accent-orange'>
                {project.features.map((each, index) => <li key={index} className=''>{each}</li>)}
            </ul>
        </motion.section>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        >
            <h3 className='text-2xl font-bold mt-10 mb-4'>Skills Showcased: </h3>
            <ul className='list-disc ml-6 text-lg/8 marker:text-accent-orange'>
                {project.skills.map((each, index) => <li key={index}>{each}</li>)}
            </ul>
        </motion.section>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        >
            <h3 className='text-2xl font-bold mt-10 mb-4'>What I Learned: </h3>
            <p className='text-lg/8 whitespace-pre-line'>{project.learnings}</p>
        </motion.section>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        >
            <h3 className='text-2xl font-bold mt-10 mb-4'>Future Enhancements: </h3>
            <p className='text-lg/8 whitespace-pre-line'>{project.future}</p>
        </motion.section>
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='flex flex-row flex-wrap gap-8 justify-center mt-24'>
            {project.links.map((button, index) => 
                <Button
                text={button.title}
                style='primary'
                type='link'
                destination={button.link}
                newWindow={true}
                key={index}
                />
            )}
        </motion.div>
    </motion.div>
  )
}
