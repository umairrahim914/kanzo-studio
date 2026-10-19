'use client'

import Link from 'next/link'
import Chip from './chip'
import { useState } from 'react'


const servicesData = [
  {
    id: 'interior',
    label: 'Interior Design',
    imgsrc: '/images/servicemain-img.png',
    heading: 'Interior Design',
    para: 'We shape interiors that feel calm, warm and beautifully composed balancing natural materials, soft light, and purposeful detail to create spaces that support mindful living.'
  },
  {
    id: 'architecture',
    label: 'Architecture Design',
    imgsrc: '/images/servicemain2.webp', // Replace with your actual image path
    heading: 'Architecture Design',
    para: 'Creating functional, sustainable, and visually striking architectural designs that seamlessly harmonize with their surrounding environment.'
  },
  {
    id: 'spatial',
    label: 'Spatial Planning',
    imgsrc: '/images/servicemain3.webp', // Replace with your actual image path
    heading: 'Spatial Planning',
    para: 'Optimizing spatial layouts to maximize flow, efficiency, and comfort while maintaining aesthetic balance across any dimension.'
  }
]


export default function services() {
  const [activeFilter, setActiveFilter] = useState('interior')

  // Find current active item details
  const activeService = servicesData.find(service => service.id === activeFilter)


  return (
    <div className='p-[8vw] flex flex-col items-center'>
      <span className='bg-gray-100 px-1.5 py-0.5 flex gap-2 font-instrument text-base text-[#506E61] font-medium'><img src="/images/section-icon.svg" alt="sectionicon" />OUR SERVICE</span>

      <h2 className=' pt-4 text-[7vw] md:text-6xl font-tight font-normal leading-tight max-w-4xl '>Design Services Rooted <span className='block font-lato-italic font-[500] md:font-medium mt-1 text-center'>in Simplicity & Balance</span></h2>

      <div className='relative pt-[13vw] md:pt-[4vw] flex flex-row justify-center'>

        <div className='pt-[25vw] md:pt-0 absolute z-5 mt-[2vw] w-[50vw] h-[10vh] flex flex-col md:flex-row gap-[7vw] md:gap-4 justify-center items-center'>
          {servicesData.map((service) => {
            const isActive = activeFilter === service.id
            return (
              <button
                key={service.id}
                onClick={() => setActiveFilter(service.id)}
                className={`px-2 md:px-3 py-0.5 md:py-1.5 rounded-sm font-tight text-[3.3vw] md:text-sm transition-colors cursor-pointer ${isActive
                    ? 'bg-[#000000b9] text-white'
                    : 'bg-[#67645F] hover:bg-[#504d49] text-white'
                  }`}
              >
                {service.label}
              </button>
            )
          })}
        </div>


        {activeService && (
          <Chip
            imgsrc={activeService.imgsrc}
            heading={activeService.heading}
            para={activeService.para}
          />
        )}
      </div>

      <div className='z-3 mt-[5vw] flex flex-col gap-8'>
        <p className='text-[#5B5B5B] text-[3.5vw] md:text-lg font-tight font-normal text-center'>Join over 500 businesses already growing with Prospect.</p>

        <div className='px-[7vw] md:px-0 flex flex-wrap md:flex-row gap-[5vw] md:gap-12 items-center '>
          <img src="/images/firstserviceimg.svg" alt="firstserviceimg" />
          <img src="/images/secondserviceimg.svg" alt="secondserviceimg" />
          <img src="/images/thirdserviceimg.svg" alt="firstserviceimg" />
          <img src="/images/fourthserviceimg.svg" alt="fourthserviceimg" />

        </div>
      </div>
    </div>
  )
}
