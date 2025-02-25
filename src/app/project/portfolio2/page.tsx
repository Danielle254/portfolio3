"use client"

import React from 'react'
import ProjectDetailPage from '../../../components/ProjectDetailPage'

const portfolio2Project = {
  title: "Personal Portfolio - Version 2",
  demo: "https://www.loom.com/embed/e32f21774c3a4a4d8a9a402abb4b5a81?hideEmbedTopBar=true",
  tech: ["React.js", "JavaScript", "Sass/SCSS", "React Router", "Accessibility"],
  description: `Gridiron Survivor is a football survivor pool web application built as part of a software development apprenticeship program. I worked on this project from October 2024 - February 2025, focusing on addressing user experience issues including accessibility. We are currently in the process of standing up a new team project.

  This site allows users to stand up a league with several members, then those members can make multiple picks from a list of NFL games happening that week. The game's outcome determines whose picks "survive" and live to do another round the next week. Whoever is still standing at the end of the season typically wins a large prize!
  
  July - September 2024`,
  heading: "Key Features",
  features: ["Light and Dark mode with toggle", "Ability for users to turn animations on/off", "Multi page React application"],
  skills: ["Getting up to speed quickly on an unfamiliar, complex code base", "Quickly learning new technologies (Next.js, styleScript, Jest, React Testing Library)", "Performing peer code reviews", "Writing unit tests for improved code quality" ],
  learnings: `This project has been a great experience in implementing typical corporate processes like sprint planning, estimating points for tickets, and performing code reviews. I really enjoyed the challenge of diving into an existing codebase, finding the files relevant to my tickets, solving problems, and working collaboratively with a team.
  
  This was my first introduction to Next.js and styleScript, and I really like these tools and the structure they provide. It was a good resourcefulness exercise in learning these quickly so that I could be effective as soon as possible.
  
  Finally, I was glad for an opportunity to flex my web accessibility skills and make proactive contributions to help make this project more accessible.`,
  future: `The team is shifting to a different project going forward - a Secret Santa web application that will be launched as a paid SaaS product late 2025. This project utilizes a similar tech stack as well as an AI API for customized gift recommendations.`,
  links: [
    {
      title: "View Website",
      link: 'https://staging.gridironsurvivor.com/',
      style: 'primary'
    },
    {
      title: "View Code",
      link: 'https://github.com/Danielle254/portfolio-site2',
      style: 'secondary'
    },
  ],
  screen1: '/projectImages/portfolio2screen1.jpg',
  screen2: '/projectImages/portfolio2screen2.jpg'
}


export default function Portfolio2() {
  return (
    <>
    <ProjectDetailPage 
    project={portfolio2Project}
    />
    </>
  )
}
