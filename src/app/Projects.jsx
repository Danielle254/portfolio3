import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projectData = [
  {
      title: "Service Dogs Around Town",
      summary: "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals.",
      alt: "screenshot of service dogs around town project",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Google Maps API", "Firebase"],
      link1: "/sdat",
      link2: "https://servicedogsaroundtown.vercel.app/"
  },
  {
      title: "Service Dogs Around Town",
      summary: "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals.",
      alt: "screenshot of service dogs around town project",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Google Maps API", "Firebase"],
      link1: "/sdat",
      link2: "https://servicedogsaroundtown.vercel.app/"
  },
  {
      title: "Service Dogs Around Town",
      summary: "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals.",
      alt: "screenshot of service dogs around town project",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Google Maps API", "Firebase"],
      link1: "/sdat",
      link2: "https://servicedogsaroundtown.vercel.app/"
  }
]

const projectsList = projectData.map((project, index) => {
  return (
    <ProjectCard
    project={project}
    index={index}
    />
  )
});

export default function Projects() {
  return (
    <div className='h-full md:min-h-screen max-w-4xl mx-auto py-8 px-2' id='projects-section'>
      <h2 className='text-4xl mb-10'>Projects</h2>
      <div className='flex flex-col gap-10'>
        {projectsList}
      </div>
      
    </div>
  )
}
