import React from 'react'
import emailIcon from '../../public/socialIcons/email.png'
import githubIcon from '../../public/socialIcons/github.png'
import linkedinIcon from '../../public/socialIcons/linkedin.png'

export default function Social() {
  return (
    <ul className='h-8 flex flex-row mx-auto gap-2 lg:gap-6'>
        <li><a href="https://www.linkedin.com/in/danielle-lindblom/" title='LinkedIn' target='_blank'><img src={linkedinIcon.src} className='w-8 hover:shadow-[0_0_5px_5px_#ffbd59] rounded-full transition duration-300 ease-in-out' alt=''/></a></li>
        <li><a href="https://github.com/Danielle254" title='GitHub' target='_blank'><img src={githubIcon.src} className='w-8 hover:shadow-[0_0_5px_5px_#ffbd59] rounded-full transition duration-300 ease-in-out' alt=''/></a></li>
        <li><a href="mailto:danielle.lindblom@gmail.com" title='Email'><img src={emailIcon.src} className='w-8 hover:shadow-[0_0_5px_5px_#ffbd59] rounded-full transition duration-300 ease-in-out' alt=''/></a></li>
    </ul>

  )
}
