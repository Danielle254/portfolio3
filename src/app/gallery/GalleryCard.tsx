import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import CustomLink from "@/components/CustomLink";

interface GalleryProject {
  title: string;
  img: string;
  alt: string;
  tags: string[];
  links: string[];
}

export default function GalleryCard({ project }: { project: GalleryProject }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-light-purple bg-opacity-80 text-left text-main-purple rounded shadow max-w-80 p-4 flex flex-col justify-between"
    >
      <motion.div>
        <h3 className="text-xl my-2 font-bold">{project.title}</h3>
        <Image
          src={project.img}
          alt={project.alt}
          sizes="100vw"
          width={0}
          height={0}
          style={{
            borderRadius: "5px",
            border: "1px solid #37183b",
            width: "100%",
            height: "auto",
          }}
        />
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-sm text-main-purple flex flex-row gap-x-4 gap-y-2 flex-wrap my-6"
        >
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-row flex-wrap gap-2"
      >
        <CustomLink
          text="Details"
          style="primaryDark"
          destination={project.links[0]}
          newWindow={false}
        />
        <CustomLink
          text="Website"
          style="secondaryDark"
          destination={project.links[1]}
          newWindow={true}
        />
        <CustomLink
          text="Code"
          style="secondaryDark"
          destination={project.links[2]}
          newWindow={true}
        />
      </motion.div>
    </motion.div>
  );
}
