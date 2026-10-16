import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function article() {
  return (
    <div className='pt-[8vw] bg-gray-100 flex flex-col items-center'>
        <div className='flex flex-col items-center'>
             <span className='bg-white px-1.5 py-0.5 flex gap-2 font-instrument text-base text-[#506E61] font-medium'><img src="/images/section-icon.svg" alt="sectionicon" />ARTICLE</span>

             <h2 className='w-[100%] pt-4 text-[7vw] md:text-6xl font-tight font-normal leading-tight text-center'>Insights that <span className='font-lato-italic font-medium '>shape </span>our <br/> architectural <span className='font-lato-italic font-medium'>vision</span></h2>
        </div>  

        <div className='pt-[5vw] pl-[3vw]'>
            <div className='flex flex-col md:flex-row gap-[4vw] md:gap-[1.5vw]'>
                <div className='h-[95vw] bg-black opacity-110 md:h-[48vw] w-[97%] md:w-[48%] rounded-[12px] overflow-hidden relative'>
                    <img src="images/article1.webp" alt="article1" className='h-[95vw] md:h-[48vw] w-[100%]' />

                    <div className='flex items-center gap-[2.5vw] md:gap-[1vw] absolute bottom-[22vw] md:bottom-[9vw] right-[11vw] md:right-[13vw]'>
                        <span className=' px-3 py-1 rounded-sm backdrop-blur-3xl text-white font-tight text-[3.5vw] md:text-[1.1vw]'>Interior Design
                        </span>

                        <span className='font-tight text-[3.5vw] md:text-[1.2vw] text-white '>November 2, 2026</span>
                    </div>

                    <h2 className='absolute bottom-[3vw] md:bottom-[2vw] right-[13vw] md:right-[10vw] text-white text-[5vw] md:text-[2vw]  text-center font-tight font-[400]'>Blurring the Boundaries <br />Between Indoors and Nature</h2>

                    

                </div>

                <div className='h-[95vw] bg-black opacity-110 md:h-[48vw] w-[97%] md:w-[48%] rounded-[12px] overflow-hidden relative'>
                    <img src="images/article2.webp" alt="article1" className='h-[95vw] md:h-[48vw] w-[100%]' />

                    <div className='flex items-center gap-[2.5vw] md:gap-[1vw] absolute bottom-[17vw] md:bottom-[7vw] right-[11vw] md:right-[12vw]'>
                        <span className=' px-3 py-1 rounded-sm backdrop-blur-sm text-white font-tight text-[3.5vw] md:text-[1.1vw]'>Interior Design
                        </span>

                        <span className='font-tight text-[3.5vw] md:text-[1.2vw] text-white '>November 2, 2026</span>
                    </div>

                    <h2 className='absolute bottom-[5vw] md:bottom-[3vw] right-[17.5vw] md:right-[12vw] text-white text-[5vw] md:text-[2vw]  text-center font-tight font-[400]'>Spatial Flow & Wellness </h2>
                </div>  
        </div>
        </div>
        <Link href='#' className='mt-[12vw] md:mt-[5vw] text-white font-tight w-fit bg-[#506E61] px-8 py-3 rounded-xl flex justify-between gap-2'><span className='text-base font-tight font-medium flex items-center '>See all article</span> <span className='text-sm font-tight font-medium flex items-center'><FontAwesomeIcon icon={faArrowRight} style={{ color: 'rgb(255, 255, 255)', width: '16px' }} /></span></Link>

        <div className='pt-[10vw]'>
        </div>
    </div>

  )
}
