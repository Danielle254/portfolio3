import React from 'react'
import Nav from './Nav'
import Social from './Social'
import profile from '../assets/profile.png'
import Image from 'next/image'

export default function Sidebar() {

  return (
    <div className='bg-gray-50 lg-col-span-1 h-screen flex flex-col justify-between py-12 items-center'>
      <button className='self-end mr-2 lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-lg font-bold'>Danielle Lindblom</h1>
        <Image
        src={profile}
        alt='Danielle Lindblom profile picture'
        style={{borderRadius: '50%', border: '1px solid black'}}
        height={100}
        />
      </div>
      <Nav />
      <Social />
    </div>
  )
}
