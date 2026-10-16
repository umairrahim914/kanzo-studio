import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'



export default function hero() {
  return (
    <div className="h-screen w-full flex items-center">
        <img src="/images/hero.webp" alt="heroimg" className='h-screen w-full absolute object-cover object-center' />
        <div className='inline-flex flex-col gap-8 relative z-2 font-semibold p-8'>
            <h1 className='w-[100%] md:w-[70%] font-normal font-tight text-white text-[9vw] md:text-[5.5vw] tracking-tight leading-tight '>Thoughtful Design for a <span className=' font-lato-italic mt-3'>Refined Lifestyle</span></h1>
            <Link href='#' className='text-black w-fit bg-white px-8 py-3 rounded-xl flex justify-between gap-2'><span className='md:text-sm text-lg font-tight md:font-medium font-normal flex items-center '>Book a call</span> <span className='text-sm font-tight font-medium flex items-center'><FontAwesomeIcon icon={faArrowRight} style={{ color: 'rgb(0, 0, 0)', width: '16px' }} /></span></Link>
        </div>

        <div className='absolute bottom-0 left-[8%] bg-white rounded-2xl p-3 md:w-[20vw] w-[50vw] md:left-[78%]'>
          <div className='overflow-hidden rounded-xl'>
            <img src="/images/cardimg.webp" alt="cardimg" className='object-cover h-[25vw] md:h-[10vw] w-full' />
          </div>

          <div className='mt-3'>
            <h3 className='text-xl font-lato font-medium'>Tsuki House</h3>

            <div className='flex items-end gap-2'>

            <Link href='#' className='mt-3 rounded-lg border border-gray-500 px-2 py-0.5'>
            <span className="text-xs"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'rgb(30, 48, 80)', width: '16px' }} /></span>
            
            
            </Link>
            <span className='text-sm font-tight font-normal mb-1'>Detail Project</span>
          </div>
            
          </div>

          

        </div>

      
    </div>
  )
}
