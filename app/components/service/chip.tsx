import React from 'react'
import PropTypes from 'prop-types'

export default function chip({imgsrc, heading, para}) {
  return (
    <div className='h-[150vw] w-[93vw] md:h-[45vw] flex justify-center items-end rounded-2xl'>
        <img src={imgsrc} alt="service-main-img" className='absolute rounded-2xl w-[93vw] h-[150vw] md:h-[45vw] object-cover object-center' />
        <div className='absolute rounded-2xl w-[93vw] h-[150vw] md:h-[45vw] bg-black opacity-30'></div>
        
        <div className='flex flex-col gap-4 mb-[3vw] text-white z-7 items-center '>
          <h2 className='font-lato text-[7vw] md:text-5xl font-[600] md:font-[500]'>{heading}</h2>
          <p className='font-tight text-center w-[80vw] md:w-[45%] mb-[2vw] md:mb-0 text-sm'>{para}</p>

      </div>
    </div>
  )
}

chip.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
}
