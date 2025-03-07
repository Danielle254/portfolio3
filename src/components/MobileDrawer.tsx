import React from 'react'
import Social from './Social'
import profile from '../../public/profile.png'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'

type DrawerProps = {
    isOpen: boolean;
    toggleDrawerOpen: () => void
}

export default function MobileDrawer({isOpen, toggleDrawerOpen}: DrawerProps) {
    
  return (
    <div className={`bg-gray-100 text-main-purple fixed top-0 right-0 flex flex-col justify-between py-6 items-center z-10 h-full w-full transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='self-end mr-6 border border-transparent hover:border-black' onClick={toggleDrawerOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" aria-hidden='true'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-lg font-bold'>Danielle Lindblom</h1>
            <Link href={'/'} onClick={toggleDrawerOpen}>
              <Image
              src={profile}
              alt='Danielle Lindblom profile picture'
              style={{borderRadius: '50%', border: '1px solid black'}}
              height={100}
              />
            </Link>
            <Nav 
            toggleDrawerOpen={toggleDrawerOpen}
            />
        </div>
        <Social />
    </div>  
  )
}
