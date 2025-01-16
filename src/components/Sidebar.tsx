import React from 'react'
import Nav from './Nav'
import Social from './Social'

export default function Sidebar() {
  return (
    <div className='bg-gray-50 col-span-1 h-screen flex flex-col justify-between py-12  text-center'>
      <h1>Danielle Lindblom</h1>
      <Nav />
      <Social />
    </div>
  )
}
