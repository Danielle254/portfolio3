"use client"

import React from 'react'
import ProjectDetailPage from '../../components/ProjectDetailPage'

const sdatProject = {
  title: "Service Dogs Around Town",
  demo: "https://www.loom.com/embed/f552d67328864f02969384f3a6eee2fc?hideEmbedTopBar=true",
  tech: ["React.js", "JavaScript", "Google Maps API", "Firebase Database", "Firebase Authentication", "Tailwind CSS"],
  description: `This is what I'd call my capstone project. It was broken down into multiple versions and deployments, and is now a multi-user, public application utilizing a database and multiple APIs.
  
  The idea for this project came from a personal problem. As a service dog handler, I was having difficulty remembering which businesses (particularly restuarants) I'd visited where I'd had a good experience. I built this React application using the Google Maps interface to allow users like myself to easily search for and add information about a local business as it relates to the comfort and safety of my service dog.`,
  features: ["Login with a Google Account", "Search for a business with Google Maps Autocomplete API", "Rate, review, and save private and public notes about that business with a custom form", "See all existing businesses that have been rated in the library", "Read about the app on the About page", "Filter your places by your favorites"],
  skills: ["Working with multiple APIs", "Managing user data in a database", "CRUD app - Create, Read, Update, Delete", "Multiple page app with React Router", "End user testing and incorporating feedback"],
  learnings: "",
  future: "I have lots of ideas to make the user experience even better. I'd like to add the functionality where the list of places on the sidebar matches what is shown on the map and adjusts itself based on the map window changing, just like Google Maps does. Another big item on the To Do list is to allow multiple users to rate and review the same business location.",
  links: {
    "GitHub Repo": 'https://github.com/Danielle254/ServiceDogsAroundTown_v2',
    "Live Site": 'https://servicedogsaroundtown.vercel.app/',
    "project board": "https://github.com/users/Danielle254/projects/1"
  }
}




export default function SDAT() {
  return (
    <>
    <ProjectDetailPage 
    project={sdatProject}
    />
    </>
  )
}
