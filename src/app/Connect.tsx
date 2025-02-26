"use client"

import React from 'react'
import emailIcon from '../../public/socialIcons/emailLight.png'
import githubIcon from '../../public/socialIcons/githubLight.png'
import linkedinIcon from '../../public/socialIcons/linkedinLight.png'
import montana from '../../public/montana.jpg'
import Image from 'next/image'
import Footer from './Footer'
import { motion } from 'motion/react'
import CustomLink from '@/components/CustomLink'

export default function Connect() {
  return (
    <motion.section
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='max-w-5xl mx-auto flex flex-col items-center pt-8 pb-6 md:pb-8 px-2 md:px-0' 
    id='connect-section'
    >
      <h2 className='text-4xl mb-10 md:mb-16 text-accent-orange'>Connect</h2>
      <motion.ul
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='text-light-purple flex flex-col gap-1 md:flex-row md:gap-10'
      >
        <li className='text-lg hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded px-2 py-1 transition duration-300 ease-in-out'><a href="https://www.linkedin.com/in/danielle-lindblom/" className='flex flex-row gap-4 md:gap-2 items-center'><img src={linkedinIcon.src} className='w-6 h-6' alt=''/>LinkedIn 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"  aria-hidden='true'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg></a>
        </li>
        <li className='text-lg hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded px-2 py-1 transition duration-300 ease-in-out'><a href="https://github.com/Danielle254" className='flex flex-row gap-4 md:gap-2 items-center'><img src={githubIcon.src} className='w-6 h-6' alt=''/>GitHub 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"  aria-hidden='true'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg></a>
        </li>
        <li className='text-lg hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded px-2 py-1 transition duration-300 ease-in-out'><a href="mailto:danielle.lindblom@gmail.com" className='flex flex-row gap-4 md:gap-2 items-center
        '><img src={emailIcon.src} className='w-6 h-6' alt=''/>Email</a>
        </li>
      </motion.ul>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='flex flex-col items-center mt-8 mb-6 bg-light-purple bg-opacity-10 rounded shadow px-10 py-6 mx-2 md:mx-0'
      >
        <Image
          src={montana}
          alt='Danielle Lindblom in Glacier National Park'
          style={{borderRadius: '5%', border: '1px solid #37183b'}}
          height={300}
        />          
        <p className='text-lg mt-2 mb-6'>Currently residing in Missoula, Montana and open to remote work.</p>
        <CustomLink
          text={'View Resume'}
          style={'primary'}
          destination={'/resume.pdf'}
          newWindow={true}
        />
      </motion.div>
      <Footer />
    </motion.section>
  )
}
