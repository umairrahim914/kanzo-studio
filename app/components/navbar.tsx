'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const links = ['Home', 'About', 'Pricing', 'Article', 'Project']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between fixed z-30 top-0 w-full px-6 py-4 backdrop-blur-xs'>
        <Link href='#' className='flex items-center'>
          <img src='images/navlogo.svg' alt='navlogo' className='h-8 w-auto' />
        </Link>

        {/* Desktop nav - hidden on mobile */}
        <nav className='hidden md:flex items-center justify-center gap-2 bg-[#71726D] px-2.5 py-2 backdrop-blur rounded-lg'>
          {links.map((link) => (
            <Link
              key={link}
              href='#'
              className='text-white font-tight font-medium transition-all duration-100 rounded hover:bg-[#62625d] px-4 py-0.5'
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href='#'
          className='hidden md:block bg-white px-6 py-3 rounded-lg text-[#1E1E1E]'
        >
          Free consultation
        </Link>

        {/* Hamburger - mobile only */}
        <button
          onClick={() => setOpen(true)}
          aria-label='Open menu'
          className='md:hidden flex flex-col items-end justify-center gap-1.5 w-8 h-8'
        >
          <span className='block h-0.5 w-10 bg-white rounded' />
          <span className='block h-0.5 w-8 bg-white rounded' />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label='Close menu'
          className='absolute top-4 right-6 w-8 h-8 flex items-center justify-center'
        >
          <span className='absolute block h-0.5 w-7 bg-black rounded rotate-45' />
          <span className='absolute block h-0.5 w-7 bg-black rounded -rotate-45' />
        </button>

        <nav className='flex flex-col items-center' style={{ gap: '3vw' }}>
          {links.map((link) => (
            <Link
              key={link}
              href='#'
              onClick={() => setOpen(false)}
              className='text-[#1E1E1E] text-2xl font-tight font-medium'
            >
              {link}
            </Link>
          ))}
        </nav>

        <Link
          href='#'
          onClick={() => setOpen(false)}
          className='mt-[6vw] bg-[#1E1E1E] text-white px-6 py-3 rounded-lg'
        >
          Free consultation
        </Link>
      </div>
    </>
  )
}