import React from 'react'
import ProjectCard from './projectCard'

export default function project() {
  const projects = [
  {
    image: '/images/cardimg.webp',
    title: 'Tsuki House',
    tags: ['Hospitality', 'Retail / F & B'],
    raised: true,
  },
  {
    image: '/images/projectsecondimg.webp',
    title: 'Tsuki House',
    tags: ['Hospitality', 'Retail / F & B'],
    raised: false,
  },
  {
    image: '/images/project3img.webp',
    title: 'Tsuki House',
    tags: ['Hospitality', 'Retail / F & B'],
    raised: true,
  },
  {
    image: '/images/project4img.webp',
    title: 'Tsuki House',
    tags: ['Hospitality', 'Retail / F & B'],
    raised: false,
  },
  {
    image: '/images/project5inmg.webp',
    title: 'Tsuki House',
    tags: ['Hospitality', 'Retail / F & B'],
    raised: true,
  },
  {
    image: '/images/project6inmg.webp',
    title: 'Tsuki House',
    tags: ['Hospitality', 'Retail / F & B'],
    raised: false,
  },
]

  return (
    <div className='bg-gray-100 pt-[7vw]'>
      <span className='bg-white inline-flex mx-[3vw] px-1.5 py-0.5 gap-2 font-instrument text-base text-[#506E61] font-medium'><img src="/images/section-icon.svg" alt="sectionicon" />LATES PROJECT</span>

      <div className='pt-[3vw] md:pt-0 flex flex-col md:flex-row justify-between items-end px-[3vw] gap-[6vw] md:gap-0'>
        <h2 className='flex flex-col w-[100%] md:w-[50%] pt-4 text-[8vw] md:text-6xl font-tight font-normal leading-tight'>The Architecture of <span className='w-[60%] block font-lato-italic font-medium md:mt-1'>Well-being</span></h2>

        <p className='w-[100%] md:w-[35%] text-[#5B5B5B] font-normal'>Exploring Sensory Design: Our practice is dedicated to creating spaces that transcend the ordinary, focusing on human-centric design that enhances quality of life.</p>
      </div>

      <div className='md:h-[400vh] md:overflow-clip'>

        
        <div className='imganim py-[7vw] md:py-0 w-full pr-[3vw] relative md:w-[200vw] md:sticky top-0 md:h-screen flex flex-col md:flex-row items-end gap-[7vw] md:gap-[3vw] flex-nowrap pl-[3vw] md:pr-0'>


          {projects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    image={project.image}
                    title={project.title}
                    tags={project.tags}
                    raised={project.raised}
                  />
                ))}

          {/* <div className=' w-full md:translate-y-[-13vh] flex flex-col gap-[4vw] md:gap-[1vw] md:w-[28vw] bg-white p-[1vw] rounded-[8px]'>
            <div className='rounded-[8px] w-full h-[80vw] md:w-[26vw] md:h-[26vw] md:overflow-clip'>
              <img src="/images/cardimg.webp" alt="okk" className='rounded-[8px] w-full h-[80vw] md:w-[28vw] md:h-[28vw] object-cover' />
            </div>
            <h3 className='text-4xl md:text-3xl font-lato font-medium'>Tsuki House</h3>
            <div className='flex'>
              <span className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-xl md:text-sm text-black font-normal'>Hospitality</span>

              <span className='bg-[#EEEEEE] inline-flex mx-[1.5vw] px-6 py-0.5 font-tight text-xl md:text-sm text-black font-normal'>Retail / F & B</span>
            </div>
          </div>


          <div className='flex flex-col gap-[1vw] w-[28vw] bg-white p-[1vw] rounded-[8px]'>
            <div className='rounded-[8px] w-[26vw] h-[26vw] overflow-clip'>
              <img src="/images/projectsecondimg.webp" alt="okk" className='rounded-[8px] w-[28vw] h-[28vw] object-cover' />
            </div>
            <h3 className='text-3xl font-lato font-medium'>Tsuki House</h3>
            <div className='flex'>
              <span className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-sm text-black font-normal'>Hospitality</span>

              <span className='bg-[#EEEEEE] inline-flex mx-[1.5vw] px-6 py-0.5 font-tight text-sm text-black font-normal'>Retail / F & B</span>
            </div>
          </div>


          <div className='translate-y-[-13vh] flex flex-col gap-[1vw] w-[28vw] bg-white p-[1vw] rounded-[8px]'>
            <div className='rounded-[8px] w-[26vw] h-[26vw] overflow-clip'>
              <img src="/images/project3img.webp" alt="okk" className='rounded-[8px] w-[28vw] h-[28vw] object-cover' />
            </div>
            <h3 className='text-3xl font-lato font-medium'>Tsuki House</h3>
            <div className='flex'>
              <span className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-sm text-black font-normal'>Hospitality</span>

              <span className='bg-[#EEEEEE] inline-flex mx-[1.5vw] px-6 py-0.5 font-tight text-sm text-black font-normal'>Retail / F & B</span>
            </div>
          </div>



          <div className='flex flex-col gap-[1vw] w-[28vw] bg-white p-[1vw] rounded-[8px]'>
            <div className='rounded-[8px] w-[26vw] h-[26vw] overflow-clip'>
              <img src="/images/project4img.webp" alt="okk" className='rounded-[8px] w-[28vw] h-[28vw] object-cover' />
            </div>
            <h3 className='text-3xl font-lato font-medium'>Tsuki House</h3>
            <div className='flex'>
              <span className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-sm text-black font-normal'>Hospitality</span>

              <span className='bg-[#EEEEEE] inline-flex mx-[1.5vw] px-6 py-0.5 font-tight text-sm text-black font-normal'>Retail / F & B</span>
            </div>
          </div>

          <div className='translate-y-[-13vh] flex flex-col gap-[1vw] w-[28vw] bg-white p-[1vw] rounded-[8px]'>
            <div className='rounded-[8px] w-[26vw] h-[26vw] overflow-clip'>
              <img src="/images/project5inmg.webp" alt="okk" className='rounded-[8px] w-[28vw] h-[28vw] object-cover' />
            </div>
            <h3 className='text-3xl font-lato font-medium'>Tsuki House</h3>
            <div className='flex'>
              <span className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-sm text-black font-normal'>Hospitality</span>

              <span className='bg-[#EEEEEE] inline-flex mx-[1.5vw] px-6 py-0.5 font-tight text-sm text-black font-normal'>Retail / F & B</span>
            </div>
          </div>

          <div className='flex flex-col gap-[1vw] w-[28vw] bg-white p-[1vw] rounded-[8px]'>
            <div className='rounded-[8px] w-[26vw] h-[26vw] overflow-clip'>
              <img src="/images/project6inmg.webp" alt="okk" className='rounded-[8px] w-[28vw] h-[28vw] object-cover' />
            </div>
            <h3 className='text-3xl font-lato font-medium'>Tsuki House</h3>
            <div className='flex'>
              <span className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-sm text-black font-normal'>Hospitality</span>

              <span className='bg-[#EEEEEE] inline-flex mx-[1.5vw] px-6 py-0.5 font-tight text-sm text-black font-normal'>Retail / F & B</span>
            </div>
          </div> */}



          


        </div>


      </div>






    </div>
  )
}
