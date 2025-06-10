"use client";

import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "Great Harvest",
    summary:
      "Freelance project for client Great Harvest Bread to attract new franchisees with a bespoke marketing landing page.",
    img: "/projectImages/greatharvestcover.jpg",
    alt: "",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Accessibility",
    ],
    links: [
      "/project/greatharvest",
      "https://franchising.greatharvest.com/",
      "https://github.com/kepsteen/great-harvest-landing-page",
    ],
  },
  {
    id: 2,
    title: "Service Dogs Around Town",
    summary:
      "Personal project that helps service dog handlers (persons with disabilities) navigate their local communities.",
    img: "/projectImages/sdatv3cover.png",
    alt: "",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Google Maps API",
      "Material UI",
      "Firebase",
      "Accessibility",
      "Vercel",
    ],
    links: [
      "/project/servicedogsaroundtown",
      "https://servicedogsaroundtown.vercel.app/",
      "https://github.com/Danielle254/sdat_v3",
    ],
  },
  {
    id: 3,
    title: "Gridiron Survivor",
    summary:
      "Football survivor pool SaaS web application built and maintained as part of an apprenticeship program.",
    img: "/projectImages/GIScover.png",
    alt: "",
    tags: [
      "Next.js",
      "TypeScript",
      "React.js",
      "shadcn/ui",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "Accessibility",
    ],
    links: [
      "/project/gridironsurvivor",
      "https://staging.gridironsurvivor.com/",
      "https://github.com/LetsGetTechnical/gridiron-survivor",
    ],
  },
];

const projectsList = projectData.map((project) => {
  return <ProjectCard project={project} key={project.id} />;
});

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto pt-8 mb-32 px-4 xl:px-0 text-center"
      id="projects-section"
    >
      <h2 className="text-4xl mb-10 text-accent-orange">Portfolio</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-10 items-center mb-8"
      >
        {projectsList}
      </motion.div>
      <Link
        href={"/gallery"}
        className="text-accent-orange text-lg hover:underline cursor-pointer px-2 py-1 rounded-sm"
      >
        More Projects
      </Link>
    </motion.section>
  );
}
