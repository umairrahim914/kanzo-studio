// components/ProjectCard.tsx
import React from 'react'

type ProjectCardProps = {
  image: string
  title: string
  tags: string[]
  raised?: boolean
  alt?: string
}

export default function projectCard({
  image,
  title,
  tags,
  raised = false,
  alt = 'project image',
}: ProjectCardProps) {
  return (
    <div
      className={`w-full flex flex-col gap-[4vw] md:gap-[1vw] md:w-[28vw] bg-white p-[1vw] rounded-[8px] ${
        raised ? 'md:translate-y-[-13vh]' : ''
      }`}
    >
      <div className='rounded-[8px] w-full h-[80vw] md:w-[26vw] md:h-[26vw] md:overflow-clip'>
        <img
          src={image}
          alt={alt}
          className='rounded-[8px] w-full h-[80vw] md:w-[28vw] md:h-[28vw] object-cover'
        />
      </div>

      <h3 className='text-4xl md:text-3xl font-lato font-medium'>{title}</h3>

      <div className='flex gap-[1.5vw]'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='bg-[#EEEEEE] inline-flex px-6 py-0.5 font-tight text-xl md:text-sm text-black font-normal'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}