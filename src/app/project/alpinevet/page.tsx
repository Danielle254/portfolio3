"use client"

import React from 'react'
import ProjectDetailPage from '../../../components/ProjectDetailPage'

const alpineVetProject = {
  title: "Local Business Homepage Refresh",
  demo: "https://www.loom.com/embed/41d9ec8e943c43bd945eeddbea745b5a?hideEmbedTopBar=true",
  tech: ["HTML", "CSS", "Accessibility"],
  description: `I took the website of a local business that I frequent, Alpine Vet Care in Missoula, and gave their website homepage a refresh. This project showcases my ability to use CSS with no libraries or frameworks to create a responsive webpage for desktop and mobile.

  Their existing website was crowded, outdated, and had several accessibility issues.

  I wanted to create a more user-friendly, easy to navigate homepage for the veterinarian's customers.
  
  July 2024`,
  heading: "Before/After",
  features: ["No semantic HTML / Updated to semantic HTML for better accessibility", "Inconsistent font size and color / Updated color palette based on logo", "Old, outdated page layout / New sectioned layout and better readability", "Contact information is non-interactive / Clickable links for phone, email, and address making it easier for visitors to use the information", "Very crowded navigation menu / Reorganized and reduced the navigation menu with better categories"],
  skills: ["Semantic HTML", "Pure CSS - FlexBox, Grid, Media Queries", "Web Design and User Experience", "Web Accessibility (NOTE: the checkbox hack, described below, is NOT fully web accessible)", "Responsive Design" ],
  learnings: `I used the "checkbox hack" for the mobile menu. I could have used JavaScript, but this was a fun feature to learn. The checkbox hack utilizes the "checked" vs "not checked" property of a checkbox instead of "onClick" in JavaScript. I also created the down/up arrows for the mobile submenu manually.
  
  I created a 2-layer menu. It was interesting to learn different methods of creating a submenu for both dektop and mobile views. This is a very common feature in older or complex business websites.`,
  future: `Creating a Site Menu in the footer. The footer is already quite full. I might make it it's own section and add a site menu to the actual footer on the desktop version.
  
  It would be fun to do an entire website overhaul and build the other pages.

  Add JavaScript for more simplified functionality of the navbar, and add a "return to top" icon for mobile.`,
  links: [
    {
      title: "View Website",
      link: 'https://danielle254.github.io/Alpine-Vet/',
      style: "primary"
    },
    {
      title: "View Code",
      link: 'https://github.com/Danielle254/Alpine-Vet',
      style: "secondary"
    },
  ],
  screen1: '/projectImages/alpine1screen.jpg',
  screen2: '/projectImages/alpine1screen.jpg'
}


export default function AlpineVet() {
  return (
    <>
    <ProjectDetailPage 
    project={alpineVetProject}
    />
    </>
  )
}
