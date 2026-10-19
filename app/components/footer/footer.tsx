import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function footer() {
  return(
    <div className='footerimg px-[5vw] md:px-[3vw] mt-[15vw] md:mt-[9vw] pt-[3vw]'>
        <div className='flex flex-col gap-[3.3vw]'>
            <h1 className='mt-[4.5vw] md:mt-[0vw] font-instrument font-white text-[8vw] md:text-6xl text-white w-[100%]'>Let’s build calm, <br/>timeless spaces together</h1>

            <Link href='#' className='mt-[4vw] md:mt-[0vw] text-white font-tight w-fit bg-white px-8 py-3 rounded-xl flex justify-between gap-2'><span className='text-black text-base font-tight font-medium flex items-center '>Contact Us</span> <span className='text-sm font-tight font-medium flex items-center'><FontAwesomeIcon icon={faArrowRight} style={{ color: 'rgb(0, 0, 0)', width: '16px' }} /></span></Link>  
        </div>

        <div className='bg-white h-[135vw] md:h-[60vw] w-full px-[6vw] py-[8vw] md:px-[3vw] md:py-[3vw] mt-[25vw] md:mt-[5vw] rounded-[20px] flex flex-col items-start gap-6'>
            
                <img src="/images/footer-icon.svg" alt="footer-icon" className='mt-[2vw] md:mt-0 h-[6.3vw] md:h-8 w-auto' />

                <h2 className='font-tight text-[5vw] md:text-3xl w-[90%] md:w-[45%]'>Timeless Japanese Minimalism, Built for Modern Living</h2>

                <div className='pt-[2vw] flex gap-[8vw]'>
                    <div className='flex flex-col gap-[2vw] md:gap-[0.5vw]'>
                    <h3 className='font-tight text-[#5C5C5C] text-[3.5vw] md:text-[1.3vw]'>Pages</h3>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Home</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw]  transition hover:underline'>About Us</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Pricing</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw]  transition hover:underline'>Project</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw]  transition hover:underline'>Blog</Link>
                    </div>


                     <div className='flex flex-col gap-[2vw] md:gap-[0.5vw]'>
                    <h3 className='font-tight text-[#5C5C5C] text-[3.5vw] md:text-[1.3vw]'>More</h3>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>404</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Style guide</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>License</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Changelog</Link>

                    </div>

                     <div className='flex flex-col gap-[2vw] md:gap-[0.5vw]'>
                    <h3 className='font-tight text-[#5C5C5C] text-[3.5vw] md:text-[1.3vw]'>Follow Us</h3>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Instagram</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Youtube</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Facebook</Link>

                    <Link href='#' className='font-tight text-[3.3vw] md:text-[1.3vw] transition hover:underline'>Linkedin</Link>

                    </div>
                </div>

                <div className='font-tight pt-[2vw]'>
                    © 2025 KANZO STUDIO. All rights reserved.
                </div>

                <img src="images/footer-logo.svg" alt="footer-logo"  />
        </div>
    </div>
  )
}
