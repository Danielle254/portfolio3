import React from 'react'

type ProjectProps = {
    title: string,
    demo: string,
    description: string,
    tech: string[],
    features: string[],
    skills: string[],
    learnings: string,
    future: string,
    links: {}
}

export default function ProjectDetailPage({project}: {project: ProjectProps}) {
  return (
    <div className='max-w-3xl mx-auto pt-8 mb-24 px-2 md:px-0 text-light-purple text-left'>
        <h2 className='text-4xl mb-10 text-accent-orange text-center'>{project.title}</h2>
        <h3 className='text-2xl font-bold mb-4'>Demo:</h3>
        <div className='relative mx-auto h-0 pb-[56%] lg:pb-[56%] border border-main-pink rounded'>
            <iframe className='absolute w-full h-full left-0 top-0' src={project.demo}  allowFullScreen title='screenshare demo of project website features' ></iframe>
        </div>
        <h3 className='text-2xl font-bold mt-10 mb-4'>Technologies Used: </h3>
        <ul className='flex flex-row flex-wrap text-lg text-accent-orange gap-x-6 justify-start mb-10 list-[circle] list-inside'>
        {project.tech.map((each, index) => <li key={index}>{each}</li>)}
        </ul>
        <p className='text-lg/8 whitespace-pre-line'>{project.description}</p>
        <h3 className='text-2xl font-bold mt-10 mb-4'>Key Features: </h3>
        <ul className='list-disc list-inside text-lg/8'>
            {project.features.map((each, index) => <li key={index}>{each}</li>)}
        </ul>
        <h3 className='text-2xl font-bold mt-10 mb-4'>Skills Showcased: </h3>
        <ul className='list-disc list-inside text-lg/8'>
            {project.skills.map((each, index) => <li key={index}>{each}</li>)}
        </ul>
    </div>
  )
}
