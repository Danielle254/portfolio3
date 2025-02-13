import React from 'react'
import Social from './Social'
import profile from '../assets/profile.png'
import Image from 'next/image'
import Nav from './Nav'

type DrawerProps = {
    isOpen: boolean;
    onClose: () => void
  }

export default function MobileDrawer({isOpen, onClose}: DrawerProps) {
    
  return (
    <div className={`bg-gray-50 fixed top-0 right-0 flex flex-col justify-between py-12 items-center z-10 h-full w-full transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='self-end mr-4 border border-transparent hover:border-black' onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" aria-hidden='true'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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
