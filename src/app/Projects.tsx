"use client";

import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "Service Dogs Around Town",
    date: "Aug 2024 - Present",
    summary:
      "A personal project that helps service dog handlers (persons with disabilities) navigate their local communities, tracking information that relates to the comfort and safety of their service animals. 3 iterations.",
    img: "/projectImages/sdatv3cover.png",
    alt: "screenshot of service dogs around town project",
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
    id: 2,
    title: "Gridiron Survivor",
    date: "Oct 2024 - Present",
    summary:
      "Football survivor pool web application built as part of an apprenticeship program. Team project involving agile sprint planning, unit testing, code reviews, and a real customer.",
    img: "/projectImages/GIScover.png",
    alt: "screenshot of service dogs around town project",
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
