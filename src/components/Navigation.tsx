import React from 'react'
import emailIcon from '../assets/email.png'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'

export default function Navigation() {
  return (
    <div className='bg-gray-50 col-span-1 h-screen flex flex-col justify-between py-12'>
        <div className='flex flex-col gap-10 pt-16 mx-auto text-lg font-bold'>
            <p>Background</p>
            <p>Portfolio</p>
            <p>Resume</p>
        </div>
        <ul className='h-8 flex flex-row mx-auto gap-6'>
            <li><a href="https://www.linkedin.com/in/danielle-lindblom/"><img src={linkedinIcon.src} className='w-8' /></a></li>
            <li><a href="https://github.com/Danielle254"><img src={githubIcon.src} className='w-8' /></a></li>
            <li><a href="mailto:danielle.lindblom@gmail.com"><img src={emailIcon.src} className='w-8' /></a></li>
        </ul>
    </div>
  )
}
