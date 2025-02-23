"use client"

import React, { useState } from 'react'
import { Caveat } from 'next/font/google'
import { motion } from 'motion/react'
import {RotatingLines} from 'react-loader-spinner'
import CustomLink from '@/components/CustomLink';

const caveat = Caveat({ subsets: ['latin'], weight: '400', variable: '--font-caveat' });

export default function About() {
  const [iframeLoading, setIframeLoading] = useState(true);

  function hideLoadingSpinner () {
    setIframeLoading(false);
  }

  return (
    <motion.section
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 0.7 }}
    className='h-full md:min-h-screen max-w-4xl mx-auto py-8 px-2'
    id='about-section'
    >
      <h2 className={`text-5xl ${caveat.variable} font-special my-4 md:mb-2`}>Hi, I'm Danielle</h2>
      <h3 className='text-xl mb-8'>a <span className='font-bold text-accent-orange'>Frontend Developer</span> passionate about accessibility.</h3>
      <div className='relative max-w-2xl mx-auto h-0 pb-[56%] lg:pb-[40%]'>
        {iframeLoading ? 
                    <div className='flex flex-col items-center'>
                      <RotatingLines
                        visible={true}
                        width="90"
                        strokeColor="pink"
                        strokeWidth="2"
                        animationDuration="0.99"
                        ariaLabel="rotating-lines-loading"
                        /></div> : null}
        <iframe className='absolute w-full h-full left-0 top-0 border border-main-pink rounded' src="https://www.loom.com/embed/7780d925a77e48848bc75caff6d317c3?sid=fc473fda-2fc0-4b7e-b0ce-ba8106adae53?hideEmbedTopBar=true&hide_title=true&hide_owner=true" allowFullScreen title='Danielle Lindblom video introduction' onLoad={hideLoadingSpinner}></iframe>
      </div>
      <p className='text-md md:text-lg mt-8'>I love working with <span className='text-accent-orange font-bold'>React,</span> <span className='text-accent-orange font-bold'>TypeScript,</span> and <span className='text-accent-orange font-bold'>Next.js.</span></p>
      <p className='text-md md:text-lg'>My background includes behavior science, project management, and instruction.</p>
      <div className='flex flex-row gap-8 justify-center mt-8'>
        <CustomLink
          text='View Projects'
          style='primary'
          destination='/#projects-section'
          newWindow={false}
        />
        <CustomLink
          text='Connect'
          style='secondary'
          destination='/#connect-section'
          newWindow={false}
        />
      </div>
    </motion.section>
  )
}