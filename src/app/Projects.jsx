import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projectData = [
  {
      title: "Service Dogs Around Town",
      summary: "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals.",
      img: "/projectImages/SDATcover.png",
      alt: "screenshot of service dogs around town project",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Google Maps API", "Firebase", "Accessibility"],
      link1: "/sdat",
      link2: "https://servicedogsaroundtown.vercel.app/"
  },
  {
      title: "Gridiron Survivor",
      summary: "Football survivor pool web application built as part of an apprenticeship program. Team project involving agile sprint planning, unit testing, code reviews, and a real customer.",
      img: "/projectImages/GIScover.png",
      alt: "screenshot of service dogs around town project",
      tags: ["Next.js", "TypeScript", "React.js", "shadcn/ui", "Jest/React Testing Library"],
      link1: "/gis",
      link2: "https://www.staging.gridironsurvivor.com/"
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
    <div className='h-full max-w-5xl mx-auto py-8 px-2' id='projects-section'>
      <h2 className='text-4xl mb-10'>Projects</h2>
      <div className='flex flex-col gap-10 items-center'>
        {projectsList}
      </div>      
    </div>
  )
}
