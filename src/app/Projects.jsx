import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='h-full md:min-h-screen max-w-4xl mx-auto py-8 px-2' id='projects-section'>
      <h2 className='text-4xl mb-10'>Projects</h2>
      <ProjectCard />
    </div>
  )
}
