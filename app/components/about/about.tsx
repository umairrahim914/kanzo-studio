import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function about() {
  return (
    <div className='p-[8vw] bg-gray-100 flex flex-col items-center gap-[3vw] '>
        <span className='bg-white px-1.5 py-0.5 flex gap-2 font-instrument text-base text-[#506E61] font-medium'><img src="/images/section-icon.svg" alt="sectionicon" />ABOUT US</span>

        <p className='p-3 md:p-0 font-lato text-3xl md:text-4xl w-[90vw] md:w-[95%] font-[500] md:font-normal text-center leading-tight'>Deeply rooted in Japanese design traditions, our studio integrates natural materials, intentional light, and the philosophy of seijaku (calmness) to craft spaces that are not only beautiful but elevate the quality of life and well-being of their occupants.</p>

        <div className='relative overflow-hidden rounded-xl mt-8 flex flex-col items-center'>
          <img src="/images/aboutimg.webp" alt="aboutimg" className='h-[80vw] md:h-96 w-[100%] md:w-[50vw] object-cover object-center rounded-xl'/>
          <div className='absolute inset-0 p-[1.5vw] z-10 flex items-start flex-col justify-between'>
            <img src="/images/imgbox-logo.svg" alt="imgboxlogo" className='p-2 md:p-0 h-[15vw] md:h-[4.5vw] w-auto'/>
            <p className='p-[2vw] md:p-0 text-[3.5vw] md:text-[1.3vw] text-white w-[84%] md:w-[50%] font-tight font-normal'>Exploring Sensory Design: Our practice is dedicated to creating spaces that transcend the ordinary.</p>
          </div>
        </div>

        <div className='pt-4 '>
          <div className='flex flex-col md:flex md:flex-row items-start gap-[5vw] '>
            <div className='flex items-center gap-2'>
              <div className='bg-[#E4E4E4] flex items-center justify-center w-12 h-[12vw] md:h-12 rounded-sm'>
                <img src="images/houseicon.svg" alt="houseicon" className='w-4xl h-[5vw] md:w-4xl md:h-5' />
              </div>

              <span className="text[[#1D1D1D] text-sm md:text-lg font-tight font-normal tracking-tight ">
               Guided by Light, Balance & Stillness
              </span>

            </div>

            <div className='flex items-center gap-2'>
              <div className='bg-[#E4E4E4] flex items-center justify-center w-12 h-[12vw] md:h-12 rounded-sm'>
                <img src="images/home-icon.svg" alt="homeicon" className='w-4xl h-[5vw] md:h-5' />
              </div>

              <span className="text-[#1D1D1D] text-sm md:text-lg font-tight font-normal tracking-tight ">
               Designed for Meaningful Living
              </span>
            </div>    
          </div>
        </div>

         <Link href='#' className='mt-8 text-white font-tight w-fit bg-[#506E61] px-8 py-3 rounded-xl flex justify-between gap-2'><span className='text-base font-tight font-medium flex items-center '>Learn more</span> <span className='text-sm font-tight font-medium flex items-center'><FontAwesomeIcon icon={faArrowRight} style={{ color: 'rgb(255, 255, 255)', width: '16px' }} /></span></Link>
    </div>
  )
}
