"use client";

import React from "react";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

const calculatorProject = {
  title: "Calculate How Long Your Dog Food Will Last",
  demo: "https://www.loom.com/embed/786d7f5fbc4f4079957bc76274bf2185?hideEmbedTopBar=true",
  tech: ["JavaScript", "Bootstrap"],
  description: `This app calculates how long a given bag of dog food will last, factoring in a multiple dog household, and provides the user with pricing information and a link to purchase the food online. There is also the ability to compare 2 different foods!

  The "days per bag" metric, which tells the user how long the bag of food will last, is helpful not only to know how often to reorder, like setting up a subscription order, but also to know if the bag you have will last the duration of your trip when setting out to travel.
  
  July 2024`,
  heading: "Key Features",
  features: [
    "Simple, easy to use input form",
    "Results message displays after form submits",
    "Ability to reset the form at any time",
    "Ability to compare 2 different foods and their prices",
    "Easy ordering via Buy Now button",
    "Accounts for more than 1 dog in your household",
  ],
  skills: [
    "HTML forms and form validation",
    "Bootstrap for styling",
    "Vanilla JavaScript with event listeners, reading and writing HTML elements",
    "Data stored in JSON file and accessed with API call",
    "Multiple complex JavaScript functions",
    "Organizing JS functions with modules",
  ],
  learnings: `I enjoyed writing multiple functions to perform these calculations and refactoring them into modules for better readability and organization.
  
  I also got good experience with how to break down a problem when encountering errors in the code with such complex calculations.
  
  I'm glad I went for the personal challenge of learning how to use async functions properly to retrieve JSON data via API instead of simply hosting the dataset in my main JS file.
  
  Having a completely original project was really fun, and I got good practice using Git branching and PRs to manage the build of my many features.`,
  future: `It would be an interesting challenge to utilize the Amazon API or similar to allow the user to search for their specific brand and bag size of dog food.
  
  The physics tutor in me wants to do real world calculations (ounces per cup) for the various brands in my existing library and update that metric in the library per brand.
  
  Finally, I could add in recommended feeding guidelines for the specific brands in my existing (manual) library.`,
  links: [
    {
      title: "Try It Out",
      link: "https://danielle254.github.io/Dog-Food-Calculator/",
      style: "primary" as const,
    },
    {
      title: "View Code",
      link: "https://github.com/Danielle254/Dog-Food-Calculator",
      style: "secondary" as const,
    },
  ],
  screenshots: [
    "/projectImages/calculatorscreen1.jpg",
    "/projectImages/calculatorscreen2.jpg",
  ],
};

export default function DogFoodCalculator() {
  return (
    <>
      <ProjectDetailPage project={calculatorProject} />
    </>
  );
}
