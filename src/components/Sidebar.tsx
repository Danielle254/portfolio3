'use client'

import React from 'react'
import { useState } from 'react'
import Nav from './Nav'
import Social from './Social'
import profile from '../../public/profile.png'
import Image from 'next/image'
import MobileDrawer from './MobileDrawer'
import Link from 'next/link'

export default function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawerOpen() {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className='hidden bg-light-purple h-screen md:flex flex-col justify-between py-12 items-center col-span-1 text-main-purple'>
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-lg font-bold text-center'>Danielle Lindblom</h1>
          <Link href={'/'}>
            <Image
              src={profile}
              alt='Danielle Lindblom profile picture'
              style={{borderRadius: '50%', border: '1px solid #37183b'}}
              height={100}
            />
          </Link>          
        </div>
        <Nav 
          toggleDrawerOpen={toggleDrawerOpen}
        />
        <Social />
      </div>
      <div className='md:hidden flex flex-row justify-between my-4 mx-6'>
        <MobileDrawer 
          isOpen={drawerOpen}
          toggleDrawerOpen={toggleDrawerOpen}
        />
        <Link href={'/'}>
          <Image
            src={profile}
            alt='Danielle Lindblom profile picture'
            style={{borderRadius: '50%', border: '1px solid black'}}
            height={50}
          />
        </Link>
        <button onClick={toggleDrawerOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </>
  )
}
