"use client"

import { motion } from 'motion/react'
import coursework from './coursework.json'


export default function Education() {

  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.7}}
    className='max-w-3xl mx-auto pt-8 mb-24 px-4 lg:px-0 text-light-purple text-left'
    >
        <h2 className='text-4xl mb-10 text-accent-orange'>Software Engineering Courses</h2>
        <p className='text-lg/8 whitespace-pre-line mb-10'>My background in Mechanical Engineering and Project Management coupled with my strong desire to learn at my own pace and maintain the flexibility to dive deeper into topics of interest made pursuing Software Engineering via self study the best path for me.
        <br/>
        <br/>
        After taking a course in Python in 2021, I knew I loved programming. From that point forward, I focused on Frontend Development, with an emphasis on accessibility and functional programming.
        <br/>
        <br/>
        <strong>I've used many different sources to learn.</strong>
        <br/>
        Online learning platforms like FreeCodeCamp, Codecademy, Scrimba, and Frontend Masters have been instrumental as well as other online resources like videos, articles, forums, and communities. And of course MDN and technical documentation.
        <br/>
        <br/>
        I'm including on this page a documenting of some of those learning certificates for posterity.
        </p>
        <section>
            <h3 className='text-2xl mb-8 text-accent-orange'>Fundamentals</h3>
            <div className='flex flex-col gap-6 mb-10'>
                {coursework.courses.filter((course) => course.type === "basics").map((course) => 
                <div>
                    <p className='font-bold text-xl'>{course.title}</p>
                    <p className='text-md'>{`${course.school}  -  ${course.date}`}</p>
                </div>
                )}
            </div>
            <h3 className='text-2xl mb-8 text-accent-orange'>Programming</h3>
            <div className='flex flex-col gap-6 mb-10'>
                {coursework.courses.filter((course) => course.type === "programming").map((course) => 
                <div>
                    <p className='font-bold text-xl'>{course.title}</p>
                    <p className='text-md'>{`${course.school}  -  ${course.date}`}</p>
                </div>
                )}
            </div>
            <h3 className='text-2xl mb-8 text-accent-orange'>Frontend</h3>
            <div className='flex flex-col gap-6 mb-10'>
                {coursework.courses.filter((course) => course.type === "frontend").map((course) => 
                <div>
                    <p className='font-bold text-xl'>{course.title}</p>
                    <p className='text-md'>{`${course.school}  -  ${course.date}`}</p>
                </div>
                )}
            </div>
            <h3 className='text-2xl mb-8 text-accent-orange'>Accessibility</h3>
            <div className='flex flex-col gap-6 mb-10'>
                {coursework.courses.filter((course) => course.type === "accessibility").map((course) => 
                <div key={course.id}>
                    <p className='font-bold text-xl'>{course.title}</p>
                    <p className='text-md'>{`${course.school}  -  ${course.date}`}</p>
                </div>
                )}
            </div>
        </section>
    </motion.div>
  )
}
