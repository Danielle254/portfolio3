"use client"

import React from 'react'
import ProjectDetailPage from '../../../components/ProjectDetailPage'

const sdatv1Project = {
  title: "Service Dogs Around Town - Prototype",
  demo: "https://www.loom.com/embed/146fece58802487cb4003b5b77854c2c?hideEmbedTopBar=true",
  tech: ["React.js", "JavaScript", "CSS", "Local Storage"],
  description: `This is what I'd call my capstone project. It was broken down into multiple versions and deployments, and ultimately resulted in a multi-user, public application utilizing a database. I wanted to work outside of my comfort zone and create something that made me grow my skills.

  The idea for this project came from me, as a service dog handler, not being able to remember which businesses (particularly restuarants) I've visited were a good experience. Version 1 of this application allows users to capture information about the business and add a personal note regarding the comfort and safety of their service dog when visiting.

  Version 2 incorporates the Google Maps API and Firebase database.
  
  August - September 2024`,
  heading: "Key Features",
  features: ["Create a list of businesses you've visited", "Browser saves the list in local storage", "User can edit or delete entries", "Note which businesses were your favorites", "Sort entries by Date Visited or Business Name. Filter entries by Favorites."],
  skills: ["React components", "Utilizing local storage", "CRUD app - Create, Read, Update, Delete", "Keyboard Navigable", "Form Validation"],
  learnings: `The purpose of this project was to test out the features and functionality that I had in mind for Service Dogs Around Town. I started pushing myself in my web design and as a result updated the look and feel of the intake form quite a bit to be more professional. I really enjoyed the functional engineering of creating the sorting and filtering features. It was a fun, whimsical project and a big step towards my capstone project's final version.`,
  future: `Version 2 will incorporate the Google Maps API and utilize PocketBase for a database. This first version is a single user, "private" application. After that, it opens up to be a multi-user, "public" application that displays data from all users (except personal notes, which will be kept private to each user).`,
  links: [
    {
      title: "View Website",
      link: 'https://danielle254.github.io/ServiceDogsAroundTown_v1/',
      style: 'primary'
    },
    {
      title: "View Code",
      link: 'https://github.com/Danielle254/ServiceDogsAroundTown_v1',
      style: 'secondary'
    },
    {
      title: "Version 2",
      link: "/project/servicedogsaroundtown",
      style: 'secondary'
    }
  ],
  screenshots: ['/projectImages/sdatv1screen1.jpg', '/projectImages/sdatv1screen2.jpg']
}


export default function SDATprototype() {
  return (
    <>
    <ProjectDetailPage 
    project={sdatv1Project}
    />
    </>
  )
}
