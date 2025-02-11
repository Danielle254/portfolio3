import React from 'react'
import Nav from './Nav'
import Social from './Social'
import profile from '../assets/profile.jpeg'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className='bg-gray-50 col-span-1 h-screen flex flex-col justify-between py-12 items-center'>
      <h1>Danielle Lindblom</h1>
      <Image
      src={profile}
      alt='Danielle Lindblom profile picture'
      style={{borderRadius: '50%', border: '1px solid black'}}
      height={100}
      />
      <Nav />
      <Social />
    </div>
  )
}
