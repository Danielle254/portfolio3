"use client";

import React from "react";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

const greatHarvestProject = {
  title: "Great Harvest Bread Company",
  demo: "https://www.loom.com/embed/39246c723c2e4f79a1aefb5c25213a56?sid=91c5eb60-1c7e-4d2e-9fa8-c1cdf5c778fe?hideEmbedTopBar=true",
  tech: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "Accessibility"],
  description: `With a 6 day window from design approval to customer deadline, this project had a very fast turnaround for coding. I worked with a small team of 3 designers and 2 other developers to construct the website, successfully meeting the customer requirements.
  
  I also conducted detailed accessibility audits, using both subject matter expert knowledge as well as automated tools. I inspected the code and the browser DOM, and I utilized Axe dev tools for testing. Overall, I caught and fixed 24+ critical accessibility issues.
  
  This was a great real world project and a wonderful experience working directly with a paying customer.`,
  heading: "Key Contributions",
  features: [
    "Detailed accessibility testing",
    "Identifying and resolving 24+ accessibility issues",
    "&quotOur History&quot section",
    "&quotFAQ&quot section",
    "Building an accessible accordion for the FAQ section",
    "&quotOur Revolutionary Process&quot section",
    "Footer section",
  ],
  skills: [
    "Building a website with Next.js",
    "Collaborating with designers",
    "Working from a detailed Figma design",
    "Ensuring cross-browser compatibility",
    "Meeting web accessibility standards",
    "Coordinating with other developers in the same code base",
    "Meeting a tight deadline",
  ],
  learnings: `This was a great expercise in getting up and running quickly. I advocated for organized internal communication, and it really helped us to be successful as a team in delivering on time and avoiding confusion.
  
  As developers, we made sure to break up the work so as to avoid relying on one another for code updates or getting stuck in an unproductive loop.
  
  This was a great opportunity for me to put my accessibility knowledge into real world practice, doing my best to identify and resolve issues as they came up. As much as possible, building accessibility into the site from the start instead of relying on audits/tests to find things close to the deadline.
  
  One of my biggest learnings with this project was really getting involved with the Figma files. I've worked from Figma designs before, but this needed to be &quotpixel perfect.&quot I quickly learned the in's and out's of finding the information I needed from the Figma file in order to build my sections to spec.
  
  I also learned how to work closely with designers - how to communicate effectively in their language and ensure what I was building matched their vision.`,
  future: `Since this project moved so quickly to launch, we are naturally discovering some small issues now that the site is live. I would have preferred the time for more end-user testing, both from the customer and from people who model Great Harvest's prospective franchisees.
  
  On our newest client project, we are emphasizing our internal processes as a team to ensure clear communication and a quality deliverable. I am also increasing my accessibility knowledge through courses at Deque University.`,
  links: [
    {
      title: "View Website",
      link: "https://franchising.greatharvest.com/",
      style: "primary" as const,
      newWindow: true,
    },
    {
      title: "View Code",
      link: "https://github.com/kepsteen/great-harvest-landing-page",
      style: "secondary" as const,
      newWindow: true,
    },
  ],
  screenshots: ["/projectImages/GHscreen1.jpg", "/projectImages/GHscreen2.jpg"],
};

export default function greatHarvest() {
  return (
    <>
      <ProjectDetailPage project={greatHarvestProject} />
      <title>Great Harvest | Danielle Lindblom Portfolio</title>
    </>
  );
}
