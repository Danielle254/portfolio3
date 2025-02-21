"use client"

import React from 'react'
import GalleryCard from './GalleryCard'
import { motion } from 'motion/react'

const galleryData = [
  {
    title: "Service Dogs Around Town - Version 1",
    img: '/projectImages/sdatv1cover.jpg',
    alt: 'yellow labrador service dog with green vest that says guide dogs for the blind',
    tags: ["React.js", "JavaScript", "CSS", "Local Storage"],
    date: "Aug - Sept 2024"
  },
  {
    title: "Personal Portfolio - Version 2",
    img: '/projectImages/portfolio2.jpeg',
    alt: 'Danielle Lindblom profile picture - woman with long brown hair smiles at camera',
    tags: ["React.js", "JavaScript", "Sass/SCSS", "React Router", "Accessibility"],
    date: "July - Sept 2024"
  },
  {
    title: "Personal Conference Itinerary",
    img: '/projectImages/conference.png',
    alt: 'skyline of a major city reflected in a body of water',
    tags: ["React.js", "JavaScript", "CSS", "Local Storage", "Format PDF"],
    date: "July 2024"
  }
];

/* projects to feature: sdat v1, portfolio 2, conference itinerary, dog food calculator, alpine vet */

export default function Gallery() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='max-w-3xl mx-auto pt-8 mb-24 px-4 lg:px-0 text-light-purple text-left'
    >
        <h2 className='text-4xl mb-10 text-accent-orange text-center'>More Projects</h2>
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='flex flex-row flex-wrap gap-6'
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
