import React from 'react'
import Social from './Social'

export default function Nav() {
  return (
    <div className='bg-gray-50 col-span-1 h-screen flex flex-col justify-between py-12'>
        <nav>
          <ul className='flex flex-col gap-10 pt-16 text-center text-lg font-bold'>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
          </ul>
        </nav>
        <Social />
    </div>
  )
}
