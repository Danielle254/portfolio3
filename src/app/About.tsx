import React from 'react'
import { Caveat } from 'next/font/google'
import Button from '@/components/Button';

const caveat = Caveat({ subsets: ['latin'], weight: '400', variable: '--font-caveat' });

export default function About() {
  return (
    <div className='h-full md:min-h-screen max-w-4xl mx-auto py-8 px-2' id='about-section'>
      <h2 className={`text-5xl ${caveat.variable} font-special my-4 md:mb-2`}>Hi, I'm Danielle</h2>
      <h3 className='text-xl mb-8'>a <span className='font-bold text-accent-orange'>Frontend Developer</span> passionate about accessibility.</h3>
      <div className='relative max-w-2xl mx-auto h-0 pb-[56%] lg:pb-[40%] border border-main-pink rounded'>
          <iframe className='absolute w-full h-full left-0 top-0' src="https://www.loom.com/embed/7780d925a77e48848bc75caff6d317c3?sid=fc473fda-2fc0-4b7e-b0ce-ba8106adae53?hideEmbedTopBar=true&hide_title=true&hide_owner=true" allowFullScreen title='Danielle Lindblom video introduction' ></iframe>
      </div>
      <p className='text-md md:text-lg mt-8'>I love working with <span className='text-accent-orange font-bold'>React,</span> <span className='text-accent-orange font-bold'>TypeScript,</span> and <span className='text-accent-orange font-bold'>Next.js.</span></p>
      <p className='text-md md:text-lg'>My background includes behavior science, project management, and instruction.</p>
      <div className='flex flex-row gap-8 justify-center mt-8'>
        <Button
          text='View Projects'
          style='primary'
          type='link'
          destination='/#projects-section'
          newWindow={false}
        />
        <Button
          text='Connect'
          style='primary'
          type='link'
          destination='/#connect-section'
          newWindow={false}
        />
      </div>
    </div>
  )
}