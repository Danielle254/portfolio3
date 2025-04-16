"use client";

import React from "react";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

const sdatProject = {
  title: "Service Dogs Around Town - Version 2",
  demo: "https://www.loom.com/embed/f552d67328864f02969384f3a6eee2fc?hideEmbedTopBar=true",
  tech: [
    "React.js",
    "JavaScript",
    "Google Maps API",
    "Firebase Database",
    "Firebase Authentication",
    "Tailwind CSS",
  ],
  description: `This is the second iteration of my capstone project, and a large jump in technology from version 1.
  
  The idea for this project came from a personal problem. As a service dog handler, I was having difficulty remembering which businesses (particularly restuarants) I'd visited where I'd had a good experience. I built this React application using the Google Maps interface to allow users like myself to easily search for and add information about a local business as it relates to the comfort and safety of my service dog.
  
  August - December 2024`,
  heading: "Key Features",
  features: [
    "Login with a Google Account",
    "Search for a business with Google Maps Autocomplete API",
    "Rate, review, and save private and public notes about that business with a custom form",
    "See all existing businesses that have been rated in the library",
    "Read about the app on the About page",
    "Filter your places by your favorites",
  ],
  skills: [
    "Working with multiple APIs",
    "Managing user data in a database",
    "CRUD app - Create, Read, Update, Delete",
    "Multiple page app with React Router",
  ],
  learnings: `This project pushed me out of my comfort zone, especially when working with the Google Maps API in React. It was difficult to find documentation to suite my needs, and I did a lot of problem solving by looking at examples of what others had done.
  
  Building the mobile version of this site was also challenging, and it forced me to rethink the entire UI and useability from a mobile device. Having a split screen on mobile was impractical, so I had to design a new layout and flow.
  
  This project really helped me to grow in my resourcefulness and practical problem solving as a developer.`,
  future: `For Version 3, I plan to update my tech stack to Next.js and TypeScript. I may also use a UI library. I want to make Version 3 the best it can be and add a lot more rigor. For example, more extensive accessibility testing and also adding in unit tests.
  
  It's important to me to solicit real end users for testing as well. `,
  links: [
    {
      title: "View Website",
      link: "https://servicedogsaroundtownv2.vercel.app/",
      style: "primary" as const,
      newWindow: true,
    },
    {
      title: "View Code",
      link: "https://github.com/Danielle254/ServiceDogsAroundTown_v2",
      style: "secondary" as const,
      newWindow: true,
    },
    {
      title: "View Project Board",
      link: "https://github.com/users/Danielle254/projects/1",
      style: "secondary" as const,
      newWindow: true,
    },
    {
      title: "Version 1",
      link: "/project/servicedogsaroundtownv1",
      style: "secondary" as const,
      newWindow: false,
    },
    {
      title: "Version 3",
      link: "/project/servicedogsaroundtown",
      style: "secondary" as const,
      newWindow: false,
    },
  ],
  screenshots: [
    "/projectImages/sdatv2screen1.jpg",
    "/projectImages/sdatv2screen2.jpg",
  ],
};

export default function SDATv2() {
  return (
    <>
      <ProjectDetailPage project={sdatProject} />
    </>
  );
}
