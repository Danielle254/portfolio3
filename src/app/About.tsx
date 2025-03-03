"use client"

import React, { useState } from 'react'
import { Caveat } from 'next/font/google'
import { motion } from 'motion/react'
import {RotatingLines} from 'react-loader-spinner'
import CustomLink from '@/components/CustomLink';

const caveat = Caveat({ subsets: ['latin'], weight: '400', variable: '--font-caveat' });

export default function About() {
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  function hideLoadingSpinner (): void {
    setIframeLoading(false);
  }

  return (
    <section
    className={`h-full md:min-h-screen max-w-xl lg:max-w-2xl mx-auto py-8 px-4 ${showTranscript ? 'mb-[700px] xs:mb-[300px] sm:mb-[500px]' : 'mb-40 sm:mb-32'} text-left`}
    id='about-section'
    >
      <motion.h2 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      className={`text-5xl ${caveat.variable} font-special my-4 md:mb-2 text-center text-accent-orange`}>Hi, I'm Danielle</motion.h2>
      <motion.p 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      className='text-xl mb-8 text-center'>a <span className='font-bold'>Frontend Developer</span> passionate about accessibility.</motion.p>
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      className='relative mx-auto h-0 pb-[56%]'>
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
      </motion.div>
      <motion.button 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      onClick={() => setShowTranscript(!showTranscript)} className='text-sm hover:underline cursor-pointer'>Video Transcript</motion.button>
      {showTranscript &&
      <motion.p 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      className='text-sm text-left'>0:01 Hey there, I'm Danielle Lindblom, a front-end developer from Missoula Montana. I specialize in building accessible websites using React and JavaScript, like my side project that helps service dog handlers navigate their local communities.
      0:16 I'm currently diving deeper into TypeScript, NextJS, and Unit Testing in my apprenticeship program, where I'm working with my mentor to build and maintain a football survivor pool SaaS product.
      0:29 Fun fact, I'm actually coming into software engineering after a successful career in manufacturing engineering and continuous improvement. I also spent several years running my own small businesses of professional dog training and life coaching.
      0:44 Front-end development has been a great fit for me because of my focus on problem solving and people. And I'm particularly interested in building accessibility into all products from the start.
      0:57 Please take a look at my body of work, which can be found on my linked portfolio, and use the attached contact information to get in touch about opportunities at your organization.
      1:08 Thanks for taking the time to watch this video, and I look forward to chatting with you soon.</motion.p>
      }
      <motion.p 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      className='text-md md:text-lg mt-8'>I love working with <span className='font-bold'>React,</span> <span className='font-bold'>TypeScript,</span> and <span className='font-bold'>Next.js</span>, and I have a diverse background in behavior science, project management, and technical instruction.</motion.p>
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.7 }}
      className='flex flex-row gap-8 justify-center mt-10'>
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
      </motion.div>
    </section>
  )
}