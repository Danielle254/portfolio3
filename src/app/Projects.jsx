import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Button from '@/components/Button';

const projectData = [
  {
    id: 1,  
    title: "Service Dogs Around Town",
    summary: "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals.",
    img: "/projectImages/SDATcover.png",
    alt: "screenshot of service dogs around town project",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Google Maps API", "Firebase", "Accessibility"],
    link1: "/sdat",
    link2: "https://servicedogsaroundtown.vercel.app/"
  },
  {
    id: 2,
    title: "Gridiron Survivor",
    summary: "Football survivor pool web application built as part of an apprenticeship program. Team project involving agile sprint planning, unit testing, code reviews, and a real customer.",
    img: "/projectImages/GIScover.png",
    alt: "screenshot of service dogs around town project",
    tags: ["Next.js", "TypeScript", "React.js", "shadcn/ui", "Jest/React Testing Library"],
    link1: "/gis",
    link2: "https://www.staging.gridironsurvivor.com/"
  }
]

const projectsList = projectData.map((project) => {
  return (
    <ProjectCard
    project={project}
    />
  )
});

export default function Projects() {
  return (
    <div className='max-w-5xl mx-auto pt-8 mb-24 px-2 md:px-0' id='projects-section'>
      <h2 className='text-4xl mb-10 text-accent-orange'>Portfolio</h2>
      <div className='flex flex-col gap-10 items-center mb-8'>
        {projectsList}
      </div>
      <Button
        text={'More Projects'}
        style={'secondary'}
        type={'link'}
        destination={'/gallery'}
        newWindow={false}
      />
    </div>
  )
}
