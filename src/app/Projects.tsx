"use client"

import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Button from '@/components/Button';
import { motion } from 'motion/react'


const projectData = [
  {
    id: 1,  
    title: "Service Dogs Around Town",
    summary: "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals.",
    img: "/projectImages/SDATcover.png",
    alt: "screenshot of service dogs around town project",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Google Maps API", "Firebase", "Accessibility"],
    link1: "/servicedogsaroundtown",
    link2: "https://servicedogsaroundtown.vercel.app/"
  },
  {
    id: 2,
    title: "Gridiron Survivor",
    summary: "Football survivor pool web application built as part of an apprenticeship program. Team project involving agile sprint planning, unit testing, code reviews, and a real customer.",
    img: "/projectImages/GIScover.png",
    alt: "screenshot of service dogs around town project",
    tags: ["Next.js", "TypeScript", "React.js", "shadcn/ui", "Jest/React Testing Library"],
    link1: "/gridironsurvivor",
    link2: "https://www.staging.gridironsurvivor.com/"
  }
]

const projectsList = projectData.map((project) => {
  return (
    <ProjectCard
    project={project}
    key={project.id}
    />
  )
});

export default function Projects() {
  return (
    <motion.section
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='max-w-5xl mx-auto pt-8 mb-24 px-2 md:px-0'
    id='projects-section'
    >
      <h2 className='text-4xl mb-10 text-accent-orange'>Portfolio</h2>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='flex flex-col gap-10 items-center mb-8'
      >
        {projectsList}
      </motion.div>
      <Button
        text={'More Projects'}
        style={'secondary'}
        type={'link'}
        destination={'/gallery'}
        newWindow={false}
      />
    </motion.section>
  )
}
