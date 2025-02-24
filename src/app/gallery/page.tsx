"use client"

import React from 'react'
import GalleryCard from './GalleryCard'
import { motion } from 'motion/react'

const galleryData = [
  {
    title: "Service Dogs Around Town - Prototype",
    img: '/projectImages/sdatv1cover.jpg',
    alt: 'yellow labrador service dog with green vest that says guide dogs for the blind',
    tags: ["React.js", "JavaScript", "CSS", "Local Storage"],
    date: "Aug - Sept 2024",
    path: '/project/sdatprototype'
  },
  {
    title: "Personal Portfolio - Version 2",
    img: '/projectImages/portfolio2.jpeg',
    alt: 'Danielle Lindblom profile picture - woman with long brown hair smiles at camera',
    tags: ["React.js", "JavaScript", "Sass/SCSS", "React Router", "Accessibility"],
    date: "July - Sept 2024",
    path: '/project/portfolio2'
  },
  {
    title: "Personal Conference Itinerary",
    img: '/projectImages/conference.png',
    alt: 'skyline of a major city reflected in a body of water',
    tags: ["React.js", "JavaScript", "CSS", "Local Storage", "Format PDF"],
    date: "July 2024",
    path: '/project/conferenceitinerary'
  },
  {
    title: "Dog Food Calculator",
    img: '/projectImages/dogfood.jpg',
    alt: 'small mound of kibble dog food on white background',
    tags: ["JavaScript", "Bootstrap", "API", "Form Validation"],
    date: "July 2024",
    path: '/project/dogfoodcalculator'
  },
  {
    title: "Local Business Website Refresh",
    img: '/projectImages/alpineveterinarycare.png',
    alt: 'Alpine Veterinary Care logo',
    tags: ["HTML", "CSS", "Accessibility"],
    date: "July 2024",
    path: '/project/alpinevet'
  }
];

/* projects to feature: sdat v1, portfolio 2, conference itinerary, dog food calculator, alpine vet */

export default function Gallery() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='max-w-5xl mx-auto pt-8 mb-24 px-4 lg:px-0 text-light-purple text-left'
    >
        <h2 className='text-4xl mb-10 text-accent-orange text-center'>More Projects</h2>
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='flex flex-row flex-wrap gap-6 justify-center'
        >
          {galleryData.map((project, index) => 
          <GalleryCard 
          project={project}
          key={index}
          />
          )}
          
        </motion.div>

      
    </motion.div>
  )
}
