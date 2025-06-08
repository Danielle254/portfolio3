"use client";

import React from "react";
import GalleryCard from "./GalleryCard";
import { motion } from "motion/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Projects",
};

const galleryData = [
  {
    title: "Service Dogs Around Town - Version 2",
    img: "/projectImages/SDATv2thumb.png",
    alt: "united states map with several blue markers",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Google Maps API",
      "Firebase",
      "React Router",
    ],
    links: [
      "/project/servicedogsaroundtownv2",
      "https://servicedogsaroundtownv2.vercel.app",
      "https://github.com/Danielle254/ServiceDogsAroundTown_v2",
    ],
  },
  {
    title: "Service Dogs Around Town - Prototype",
    img: "/projectImages/sdatv1cover.jpg",
    alt: "yellow labrador service dog with green vest that says guide dogs for the blind",
    tags: ["React.js", "JavaScript", "CSS", "Local Storage"],
    links: [
      "/project/sdatprototype",
      "https://danielle254.github.io/ServiceDogsAroundTown_v1/",
      "https://github.com/Danielle254/ServiceDogsAroundTown_v1",
    ],
  },
  {
    title: "Personal Portfolio - Version 2",
    img: "/projectImages/portfolio2.jpeg",
    alt: "Danielle Lindblom profile picture - woman with long brown hair smiles at camera",
    tags: [
      "React.js",
      "JavaScript",
      "Sass/SCSS",
      "React Router",
      "Accessibility",
    ],
    links: [
      "/project/portfolio2",
      "https://djl-portfolio2.vercel.app/",
      "https://github.com/Danielle254/portfolio-site2",
    ],
  },
  {
    title: "Personal Conference Itinerary",
    img: "/projectImages/conference.png",
    alt: "skyline of a major city reflected in a body of water",
    tags: ["React.js", "JavaScript", "CSS", "Local Storage", "Format PDF"],
    links: [
      "/project/conferenceitinerary",
      "https://danielle254.github.io/Conference-Agenda/",
      "https://github.com/Danielle254/Conference-Agenda",
    ],
  },
  {
    title: "Dog Food Calculator",
    img: "/projectImages/dogfood.jpg",
    alt: "small mound of kibble dog food on white background",
    tags: ["JavaScript", "Bootstrap", "API", "Form Validation"],
    links: [
      "/project/dogfoodcalculator",
      "https://danielle254.github.io/Dog-Food-Calculator/",
      "https://github.com/Danielle254/Dog-Food-Calculator",
    ],
  },
  {
    title: "Local Business Website Refresh",
    img: "/projectImages/alpineveterinarycare.png",
    alt: "Alpine Veterinary Care logo",
    tags: ["HTML", "CSS", "Accessibility"],
    links: [
      "/project/alpinevet",
      "https://danielle254.github.io/Alpine-Vet/",
      "https://github.com/Danielle254/Alpine-Vet",
    ],
  },
];

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto pt-8 mb-24 px-4 lg:px-0 text-light-purple text-left"
    >
      <h2 className="text-4xl mb-10 text-accent-orange text-center">
        More Projects
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-row flex-wrap gap-6 justify-center"
      >
        {galleryData.map((project, index) => (
          <GalleryCard project={project} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
