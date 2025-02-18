import React from 'react'
import emailIcon from '../../public/socialIcons/emailLight.png'
import githubIcon from '../../public/socialIcons/githubLight.png'
import linkedinIcon from '../../public/socialIcons/linkedinLight.png'
import Footer from './Footer.jsx'

export default function Connect() {
  return (
    <div className='max-w-5xl flex flex-col items-center justify-between mx-auto pt-8 pb-6 md:pb-10 px-2 md:px-0 min-h-screen' id='connect-section'>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl mb-24 text-accent-orange'>Connect</h2>
        <ul className='text-light-purple flex flex-col gap-8'>
          <li className='text-lg hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded px-2 py-1'><a href="https://www.linkedin.com/in/danielle-lindblom/" className='flex flex-row gap-4 items-center'><img src={linkedinIcon.src} className='w-6 h-6' alt=''/>LinkedIn 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"  aria-hidden='true'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg></a>
          </li>
          <li className='text-lg hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded px-2 py-1'><a href="https://github.com/Danielle254" className='flex flex-row gap-4'><img src={githubIcon.src} className='w-6 h-6' alt=''/>GitHub 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"  aria-hidden='true'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg></a>
          </li>
          <li className='text-lg hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded px-2 py-1'><a href="mailto:danielle.lindblom@gmail.com" className='flex flex-row gap-4'><img src={emailIcon.src} className='w-6 h-6' alt=''/>Email</a>
          </li>
        </ul>
        <p className='text-lg mt-16'>Currently residing in Missoula, Montana and open to remote work.</p>
      </div>
      <Footer />
    </div>
  )
}
