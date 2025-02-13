import React from 'react'
import Image from 'next/image'
import SDATcover from '../assets/SDAT cover.png'
import Button from './Button'

export default function ProjectCard() {
  return (
    <div className='bg-light-purple bg-opacity-10 flex flex-col gap-4 rounded shadow text-light-purple items-center p-4 mx-1'>
      <h3 className='text-2xl font-bold'>Service Dogs Around Town</h3>
      <p className='text-lg'>A personal project that helps service dog handlers (persons with disabilities) to navigate their local communities.</p>      
      <Image 
      src={SDATcover}
      height={400}
      alt='screenshot of service dogs around town project'
      />      
      <ul className='flex flex-row flex-wrap text-lg list-[circle] gap-x-8 justify-center'>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>Google Maps API</li>
        <li>Firebase</li>
      </ul>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <Button
        text={'Demo & Details'}
        style={'primary'}
        type={'link'}
        />
        <Button
        text={'View Website'}
        style={'primary'}
        type={'link'}
        />
      </div>      
    </div>
  )
}
