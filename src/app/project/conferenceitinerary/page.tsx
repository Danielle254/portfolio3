"use client"

import React from 'react'
import ProjectDetailPage from '../../../components/ProjectDetailPage'

const conferenceProject = {
  title: "Create Your Own Personal Itinerary from a Conference Agenda",
  demo: "https://www.loom.com/embed/8f2fb0c5d93d41faac32e633ed463a56?hideEmbedTopBar=true",
  tech: ["React", "JavaScript", "CSS", "Format PDF", "Local Storage"],
  description: `This is a project of my own idea and design. The site displays the agenda for a conference in chronological order (data stored in separate file), then allows the user to add activities from the agenda to their own personal itinerary.

  This is something I wish I had when attending conferences in the past! I'd be circling my preferred talks on a paper printout. This is especially helpful when there are multiple talks occurring at the same time. When adding talks to their itinerary, they sort automatically in chornological order.

  Finally, there is the option to print your itinerary, which is formatted for ease of use.
  
  July 2024`,
  heading: "Key Features",
  features: ["Talks display in chronological order automatically, regardless of order added to itinerary", "User's itinerary stays put, even if they navigate away or refresh the screen. This makes it easy to come back and make changes as needed without having the build their itinerary from scatch each time.", "Option to clear the itinerary and start over", "Ability to print a nicely formatted version of your personal itinerary"],
  skills: ["React components", "Use of state, props, hooks, and event handlers", "Utilizing local storage", "Sort function that uses the Date object", "Passing information from parent to child and reverse", "Responsive website", "Flexbox and Grid" ],
  learnings: `This project really required me to be organized with my file structure, which in turn kept me organized in the execution.
  
  I liked learning about local storage and the print function. I can see these being useful in many other applications.

  I appreciated that my understanding of how to pass functions and attributes to children components really came together through this project.
  
  I stepped away from this project for a few months, and when I returned, I was able to read through and understand the code base and how it was functioning. I think this is largely due to having clean, readable code that is well-labeled.`,
  future: `I'm actually planning another project like this where I create the conference agenda with some sort of library to display it visually in a more calendar-like format. This will make it easier to tell which talks happen at the same time, and even visually distinguish the locations of the talks.
  
  I'd also like to add a "share" button in addition to printing.

  Another idea would be to add "add to calendar" options so users could put the talks directly onto their own personal calendar (google, etc).`,
  links: [
    {
      title: "View Website",
      link: 'https://danielle254.github.io/Conference-Agenda/',
      style: "primary" as const
    },
    {
      title: "View Code",
      link: 'https://github.com/Danielle254/Conference-Agenda',
      style: "secondary" as const
    }
  ],
  screenshots: [ '/projectImages/conferencescreen1.jpg', '/projectImages/conferencescreen2.jpg']
}


export default function ConferenceItinerary() {
  return (
    <>
    <ProjectDetailPage 
    project={conferenceProject}
    />
    </>
  )
}
