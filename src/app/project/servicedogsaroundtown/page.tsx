"use client";

import React from "react";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

const sdatv3Project = {
  title: "Service Dogs Around Town",
  demo: "https://www.loom.com/embed/1c7e2c8098984b189a144b35654393de?sid=386977cf-1e47-41a1-9257-e4b96f011e3b?hideEmbedTopBar=true",
  tech: [
    "Next.js",
    "TypeScript",
    "React.js",
    "Google Maps API",
    "Material UI",
    "Firebase Database",
    "Firebase Authentication",
    "Accessibility",
  ],
  description: `This is my capstone project as a self-taught developer. It was broken down into multiple versions and deployments, and is now a multi-user, public application utilizing a database and multiple APIs. This is the third and final version of this project.
  
  The idea for this project came from a personal problem. As a service dog handler, I was having difficulty remembering which businesses (particularly restuarants) I'd visited where I'd had a good experience. I built this React application using the Google Maps interface to allow users like myself to easily search for and add information about a local business as it relates to the comfort and safety of my service dog.

  There are links to the details on Versions 1 and 2 at the bottom of the page.
  
  March - April 2025`,
  heading: "Key Features",
  features: [
    "Login with a Google Account",
    "Search for a business with Google Maps Autocomplete API",
    "Rate, review, and save private and public notes about that business with a custom form",
    "See all existing businesses that have been rated in the library",
    "Read about the app on the About page",
    "Filter to see just your own entries",
    "Filter places -- map markers and list view -- by your favorites",
    "Navigate to the ADA.gov website for information on federal service dog laws",
  ],
  skills: [
    "Working with multiple APIs",
    "Managing user data in a database",
    "CRUD app - Create, Read, Update, Delete",
    "Using a UI library",
    "Better code organization and rigor with TypeScript",
    "Accessibility testing",
  ],
  learnings: `Building the third iteration of this project was honestly a lot of fun. I really enjoyed learning Material UI, and I think that the Google UI asthetic works great with the Google Maps interface, providing a really smooth experience for users. I wanted the design to look cohesive and the UX to be familiar and easy.
  
  Transitioning my code base from React + React Router + JavaScript to Next.js and TypeScript was an excellent exercise as a developer. With Next.js, I was able to organize my code much more efficiently, and adding TypeScript really helped me to become familiar with its rules. I absolutely love both of these technologies, and I know that adding TypeScript made this project much stronger and more robust.
  
  I'm currently working on doing thorough accessibility testing, and that's been a great learning experience as well. My next steps after that are to add unit tests and more contingencies for things not working.`,
  future: `I have lots of ideas to make the user experience even better. I'd like to add the functionality where the list of places on the sidebar matches what is shown on the map and adjusts itself based on the map window changing, just like Google Maps does. 
  
  Another big item on the To Do list is to allow multiple users to rate and review the same business location.
  
  I've made efforts towards soliciting real end users for testing, and I'm eager to hear their feedback and experiences using the site.`,
  links: [
    {
      title: "View Website",
      link: "https://servicedogsaroundtown.vercel.app/",
      style: "primary" as const,
      newWindow: true,
    },
    {
      title: "View Code",
      link: "https://github.com/Danielle254/sdat_v3",
      style: "secondary" as const,
      newWindow: true,
    },
    {
      title: "Version 2",
      link: "/project/servicedogsaroundtownv2",
      style: "secondary" as const,
      newWindow: false,
    },
    {
      title: "Version 1",
      link: "/project/servicedogsaroundtownv1",
      style: "secondary" as const,
      newWindow: false,
    },
  ],
  screenshots: [
    "/projectImages/sdatv3screen1.jpg",
    "/projectImages/sdatv3screen2.jpg",
  ],
};

export default function SDATv3() {
  return (
    <>
      <ProjectDetailPage project={sdatv3Project} />
    </>
  );
}
