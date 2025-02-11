import React from 'react'
import emailIcon from '../assets/email.png'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'

export default function Social() {
  return (

    <ul className='h-8 flex flex-row mx-auto gap-6'>
        <li><a href="https://www.linkedin.com/in/danielle-lindblom/"><img src={linkedinIcon.src} className='w-8 hover:shadow-[0_0_10px_5px_#a73974] rounded-full' /></a></li>
        <li><a href="https://github.com/Danielle254"><img src={githubIcon.src} className='w-8 hover:shadow-[0_0_10px_5px_#a73974] rounded-full' /></a></li>
        <li><a href="mailto:danielle.lindblom@gmail.com"><img src={emailIcon.src} className='w-8 hover:shadow-[0_0_10px_5px_#a73974] rounded-full' /></a></li>
    </ul>

  )
}
