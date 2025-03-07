"use client"

import CustomLink from '@/components/CustomLink';
import { motion } from 'motion/react'
import React, { useState } from 'react'
import {RotatingLines} from 'react-loader-spinner'
import dogs from '../../../public/dogs.jpg'
import Image from 'next/image';

export default function Bio() {
    const [iframeLoading, setIframeLoading] = useState<boolean>(true);
    const [showTranscript, setShowTranscript] = useState<boolean>(false);

    function hideLoadingSpinner (): void {
        setIframeLoading(false);
    }

  return (
    <div className='max-w-3xl mx-auto pt-8 mb-24 px-4 lg:px-0 text-light-purple text-left'>
        <motion.h2 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='text-4xl mb-10 text-accent-orange'>Bio</motion.h2>
        <motion.h3 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='text-2xl font-bold mb-4'>My Journey To Tech:</motion.h3>
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='relative mx-auto h-0 pb-[56%] lg:pb-[56%]'>
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
            <iframe className='absolute w-full h-full left-0 top-0 border border-main-pink rounded' src='https://www.loom.com/embed/f757d0cfe98c4e4b94f50c67e232538f?sid=55df1b88-3e0e-47bf-a798-e55a657a0105?hideEmbedTopBar=true&hide_title=true&hide_owner=true'  allowFullScreen title='screenshare demo of project website features' onLoad={hideLoadingSpinner}></iframe>
        </motion.div>
        <motion.button 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
        onClick={() => setShowTranscript(!showTranscript)} className='text-sm hover:underline cursor-pointer'>Video Transcript
        </motion.button>
        {showTranscript &&
        <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
        className='text-sm text-left h-24 overflow-y-scroll'>0:01 So, I'd love to share with you my journey to tech. My journey to tech is a bit roundabout. I am not one of those people who got into coding at the age of 6, but I've always been fascinated by how things work.<br/>
        0:16 So I got a degree in mechanical engineering, and I specialized my early career in continuous improvement and lean manufacturing. Then I did the whole follow your passion thing, and I ran my own small businesses of professional dog training.<br/>
        0:32 And life coaching, both of which were incredibly rewarding. I did all of my own marketing, websites, sales, and accounting, and those businesses were very successful until COVID came around.<br/>
        0:47 At that point, I took a job at a local SaaS company, software as a service, and I had a great time providing technical training and implementation services to their customers.<br/>
        0:58 Okay, so that's all the backstory. Why did I decide to become a software engineer after all of that? Well, part of the reason that I changed careers so many times was because I had a disability that I didn't know about.<br/>
        1:12 I kept picking things that weren't sustainable with my health. Once I received a diagnosis in 2021, I did extensive research to find a career that would be a good fit for me for the long term.<br/>
        1:26 I found that software engineering would not only not make me sick, but it was incredibly fulfilling. Front-end development in particular combines my love.<br/>
        1:37 of problem solving and my desire to help people. Once I found the A11Y community and dove into web accessibility, I knew that this was it for me.<br/>
        1:49 I decided to go the self-taught route of becoming a developer, and I've been taking advantage of all of the amazing resources that are available, as well as leaning heavily on project-based learning.<br/>
        2:01 I'm currently in a software engineering apprenticeship program under the direct mentorship of a senior engineer. Growing my skills with corporate processes and getting experience working in an enterprise level code base.<br/>
        2:16 I am open to work and I'm actively seeking an entry level front-end engineering role, preferably at a company that supports people with disabilities and builds accessibility into their products from the start.<br/>
        2:31 Thanks for taking the time to watch this video. Please feel free to reach out if you have any questions or if you just want to connect.</motion.p>
        }
        <motion.p
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
        className='text-lg/8 whitespace-pre-line mt-4 mb-10'
        >TLDR:  My journey to tech was a winding road. I first did mechanical engineering and ran my own small businesses. Then, a medical diagnosis prompted me to change careers; Software Engineering has been a great fit for my health and my interests, and I'm excited to do this long-term.
        </motion.p>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='mb-24'
        >
            <motion.h3 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7}}
            className='text-2xl font-bold my-10'>What's New:</motion.h3>
            <motion.h4
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7}}
            className='text-xl mb-4 text-accent-orange'
            >Courses
            </motion.h4>
            <div className='flex flex-col gap-6 mb-8 text-xl'>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"React Testing" by Codecademy - January 2025</motion.p>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"React and TypeScript" by Frontend Masters - March 2025</motion.p>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"Web Accessibility and React" by Frontend Masters - March 2025
                </motion.p>
            </div>            
            <motion.h4
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7}}
            className='text-xl mb-4 text-accent-orange'
            >Conferences
            </motion.h4>
            <div className='flex flex-col gap-6 mb-8 text-xl'>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"Axe-Con" by Deque - February 2025</motion.p>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"Ability Summit" by Microsoft - March 2025
                </motion.p>
            </div>
            <motion.h4
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7}}
            className='text-xl mb-4 text-accent-orange'
            >Projects
            </motion.h4>
            <div className='flex flex-col gap-6 mb-8 text-xl'>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"Service Dogs Around Town - Version 3" built with Next.js, TypeScript, and shadcn/ui - March 2025</motion.p>
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7}}
                >"Elfgorithm" built in the Gridiron Survivor SWE Apprenticeship Program - March 2025
                </motion.p>
            </div>
        </motion.section>
        <motion.section
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='mb-24'
        >
            <motion.h3 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7}}
            className='text-2xl font-bold my-10'>Personal Stuff:</motion.h3>
            <Image
            src={dogs}
            alt='two border collie dogs play in a river in montana, both are looking at the camera intently'
            style={{borderRadius: '4px', border: '1px solid #37183b'}}
            height={400}
            />
            <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.7 }}
            className='text-lg/8 whitespace-pre-line mt-4 mb-10'
            >I grew up in Minnesota, but I moved to beautiful Montana in 2020 to spend more time at Glacier National Park and never left! I love living here and hiking with my two Border Collies - Mica and River.
            </motion.p>
        </motion.section>
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.7}}
        className='flex flex-row flex-wrap gap-8'
        >
            <CustomLink
            text='Connect'
            style='primary'
            destination='/connect'
            newWindow={false}
            />
            <CustomLink
            text={'View Resume'}
            style={'secondary'}
            destination={'/resume.pdf'}
            newWindow={true}
            />
        </motion.div>

    </div>
  )
}
