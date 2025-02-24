"use client"

import React from 'react'
import ProjectDetailPage from '../../../components/ProjectDetailPage'

const gisProject = {
  title: "Gridiron Survivor",
  demo: "https://www.loom.com/embed/e32f21774c3a4a4d8a9a402abb4b5a81?hideEmbedTopBar=true",
  tech: ["Next.js", "TypeScript", "React.js", "Jest", "React Testing Library", "shadcn/ui"],
  description: `Gridiron Survivor is a football survivor pool web application built as part of a software development apprenticeship program. I worked on this project from October 2024 - February 2025, focusing on addressing user experience issues including accessibility. We are currently in the process of standing up a new team project.

  This site allows users to stand up a league with several members, then those members can make multiple picks from a list of NFL games happening that week. The game's outcome determines whose picks "survive" and live to do another round the next week. Whoever is still standing at the end of the season typically wins a large prize!
  
  October 2024 - Present`,
  heading: "Key Contributions",
  features: ["Removed distracting, obsolete information from the site", "Gave users the ability to clear popup notifications", "Resolved a screen flickering issue by creating a new login authentication workflow and utilizing a loading spinner", "Identified and fixed a key accessibility issue with the menu controls"],
  skills: ["Getting up to speed quickly on an unfamiliar, complex code base", "Quickly learning new technologies (Next.js, TypeScript, Jest, React Testing Library)", "Performing peer code reviews", "Writing unit tests for improved code quality" ],
  learnings: `This project has been a great experience in implementing typical corporate processes like sprint planning, estimating points for tickets, and performing code reviews. I really enjoyed the challenge of diving into an existing codebase, finding the files relevant to my tickets, solving problems, and working collaboratively with a team.
  
  This was my first introduction to Next.js and TypeScript, and I really like these tools and the structure they provide. It was a good resourcefulness exercise in learning these quickly so that I could be effective as soon as possible.
  
  Finally, I was glad for an opportunity to flex my web accessibility skills and make proactive contributions to help make this project more accessible.`,
  future: `The team is shifting to a different project going forward - a Secret Santa web application that will be launched as a paid SaaS product late 2025. This project utilizes a similar tech stack as well as an AI API for customized gift recommendations.`,
  links: [
    {
      title: "View Website",
      link: 'https://staging.gridironsurvivor.com/',
      type: 'primary'
    },
    {
      title: "View Code",
      link: 'https://github.com/LetsGetTechnical/gridiron-survivor',
      type: 'secondary'
    },
    {
      title: "Pull Requests",
      link: "https://github.com/LetsGetTechnical/gridiron-survivor/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed",
      type: 'secondary'
    }
  ]
}


export default function GIS() {
  return (
    <>
    <ProjectDetailPage 
    project={gisProject}
    />
    </>
  )
}
