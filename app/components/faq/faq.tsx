
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function faq() {
  return (
    <div className='bg-white pt-[7vw]'>
        <div className='px-[7vw] md:px-[3vw] flex flex-col md:flex-row'>
        <div className='w-1/2'>

        <span className='bg-gray-100 inline-flex px-1.5 py-0.5 gap-2 font-instrument text-base text-[#506E61] font-medium'><img src="/images/section-icon.svg" alt="sectionicon" />FAQS</span>

        <h2 className='w-[100%] pt-4 text-[7vw] md:text-6xl font-tight font-normal leading-tight'>Frequently <span className='font-lato-italic font-medium'>Ask</span> <br/> <span className=' font-lato-italic font-medium mt-1'> Questions</span></h2>

         <Link href='#' className='mt-[5vw] text-white font-tight w-fit bg-[#506E61] px-8 py-3 rounded-xl flex justify-between gap-2 md:mt-[2vw]'><span className='text-base font-tight font-medium flex items-center '>Contact Us</span> <span className='text-sm font-tight font-medium flex items-center'><FontAwesomeIcon icon={faArrowRight} style={{ color: 'rgb(255, 255, 255)', width: '16px' }} /></span></Link>

         </div>

         <div className='pt-[10vw] md:pt-[0vw] flex flex-col gap-[6vw] md:gap-4'>
            <div className='rounded-2xl px-[3vw] md:px-[1.5vw] py-[3vw] md:py-[1.5vw] bg-[#F5F5F5] w-[85vw] md:w-[48vw] flex flex-col gap-2'>
                <h3 className='font-tight text-lg'>What services does Kanzo Studio offer?</h3>

                <p className='text-[4vw] md:text-[1.3vw] font-tight text-[#5B5B5B] font-normal '>We specialize in branding, web design, web development, and digital product design — helping businesses build a strong and memorable digital presence.</p>
            </div>

            <div className='rounded-2xl px-[3vw] md:px-[1.5vw] py-[3vw] md:py-[1.5vw] bg-[#F5F5F5] w-[85vw] md:w-[48vw] flex flex-col gap-2'>
                <h3 className='font-tight text-lg'>How long does a typical project take?</h3>

                <p className='text-[4vw] md:text-[1.3vw] font-tight text-[#5B5B5B] font-normal '>Most projects take between 2–6 weeks depending on complexity, deliverables, and revision rounds. We’ll provide a clear timeline after reviewing your project scope.</p> 
            </div>

            <div className='rounded-2xl px-[3vw] md:px-[1.5vw] py-[3vw] md:py-[1.5vw] bg-[#F5F5F5] w-[85vw] md:w-[48vw] flex flex-col gap-2'>
                <h3 className='font-tight text-lg'>Do you work with startups or only established brands?</h3>

                <p className='text-[4vw] md:text-[1.3vw] font-tight text-[#5B5B5B] font-normal '>We work with businesses of all sizes — from early-stage startups to established companies. Our goal is to help you grow with design that elevates your brand.</p>
            </div>

             <div className='rounded-2xl px-[3vw] md:px-[1.5vw] py-[3vw] md:py-[1.5vw] bg-[#F5F5F5] w-[85vw] md:w-[48vw] flex flex-col gap-2'>
                <h3 className='font-tight text-lg'>Can you develop using Webflow or Framer?</h3>

                <p className='text-[4vw] md:text-[1.3vw] font-tight text-[#5B5B5B] font-normal '>Yes. We build high-quality, responsive websites using platforms like Webflow and Framer, complete with animations, CMS setup, and best-practice performance optimization.</p>
            </div>

            
             <div className='rounded-2xl px-[3vw] md:px-[1.5vw] py-[3vw] md:py-[1.5vw] bg-[#F5F5F5] w-[85vw] md:w-[48vw] flex flex-col gap-2'>
                <h3 className='font-tight text-lg'>What is required to start a project?</h3>

                <p className='text-[4vw] md:text-[1.3vw] font-tight text-[#5B5B5B] font-normal '>We’ll ask for your brief, project goals, references, and required deliverables. After confirming scope and pricing, a 50% upfront payment secures your project slot.</p>
            </div>


         </div>

      </div>

    </div>
  )
}
