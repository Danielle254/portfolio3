import React from 'react'
import Link from 'next/link'

export default function Nav({toggleDrawerOpen}: {toggleDrawerOpen: () => void}) {
  return (    
        <nav>
          <ul className='flex flex-col gap-10 pt-16 text-lg font-bold text-center'>
            <li className='hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded'>
              <Link href='/#about-section' onClick={toggleDrawerOpen}>About</Link>
            </li>
            <li className='hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded'>
              <Link href='/#projects-section' onClick={toggleDrawerOpen}>Projects</Link>
            </li>
            <li className='hover:shadow-[0_0_10px_5px_#ffbd59] hover:rounded hover:px-1'>
              <Link href='/resume.pdf' target='_blank' locale={false} className='flex flex-row items-center gap-1'>Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"  aria-hidden='true'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg></Link>
            </li>
          </ul>
        </nav>
  )
}
