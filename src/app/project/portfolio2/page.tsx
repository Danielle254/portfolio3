"use client";

import React from "react";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

const portfolio2Project = {
  title: "Personal Portfolio - Version 2",
  demo: "https://www.loom.com/embed/a5fbf9d4992a42b0be9294df4d1a2a8f?sid=3d258a05-2e3f-431c-a0b4-e8e8cbe7a326?hideEmbedTopBar=true",
  tech: [
    "React.js",
    "JavaScript",
    "Sass/SCSS",
    "React Router",
    "Accessibility",
  ],
  description: `This was my first real developer portfolio, and I'm proud of taking the time to create a design (with Canva) before building. I was able to get feedback on the design before putting in a lot of work.

  I enjoyed the opportunity to use Sass/SCSS, and it made standardizing things like links much easier than vanilla CSS. This was also my first attempt at using React Router, and it went quite well. I had some difficulties with deployment on GitHub Pages because of the routing but was able to get those resolved. 

  Overall, there was a LOT of learning on this project, and it moved me forward as a developer. It was also nice to have something that I felt represented me well and reflected who I was as a developer.
  
  July - September 2024`,
  heading: "Key Features",
  features: [
    "Light and Dark mode with toggle",
    "Ability for users to turn animations on/off",
    "Multi page React application",
  ],
  skills: [
    "Web Design with Canva",
    "Accessibility - keyboard navigable and option to turn animations on/off",
    "React Router to highlight project details on separate pages",
    "Using Sass/SCSS",
  ],
  learnings: `While it seems simple and clean, this project actually really challenged me in several areas. Setting up the routing with React Router, deploying to GitHub Pages, and getting my SCSS libraries set up were all new challenges that I had to overcome. I used the resources available to me, asked a lot of questions, and worked through them all.
  
  I tracked my progress with an Asana project board. This allowed me to keep track of what still had to be done, issues that had come up, and wish list items.
  
  Overall, this project forced me to be more organized and follow a plan. Something that served me well when I began my complex capstone project (Service Dogs Around Town).`,
  future: `There were still a few wish list items unresolved on my list once I published this. Things like refactoring the SCSS code to be more organized, adding a "Copied!" popup message when the email address is added to the user's clipboard, and handling the social media icons in a more effective way than image files.`,
  links: [
    {
      title: "View Website",
      link: "https://djl-portfolio2.vercel.app/",
      style: "primary" as const,
      newWindow: true,
    },
    {
      title: "View Code",
      link: "https://github.com/Danielle254/portfolio-site2",
      style: "secondary" as const,
      newWindow: true,
    },
  ],
  screenshots: [
    "/projectImages/portfolio2screen1.jpg",
    "/projectImages/portfolio2screen2.jpg",
  ],
};

export default function Portfolio2() {
  return (
    <>
      <ProjectDetailPage project={portfolio2Project} />
    </>
  );
}
