import React from 'react'

export default function testimonial() {
    return (
        <div className='pt-[7vw]'>
            <div className='flex flex-col md:flex-row justify-between items-end md:items-center px-[3vw]'>
                <h2 className='w-[100%] pt-4 text-[7vw] md:text-6xl font-tight font-normal leading-tight'>From <span className='font-lato-italic font-medium '>idea </span>to <br /> sustainable <span className='font-lato-italic font-medium'>success</span></h2>

                <span className='bg-gray-100 px-1.5 py-0.5 flex gap-2 font-instrument text-base text-[#506E61] font-medium'><img src="/images/section-icon.svg" alt="sectionicon" />Testimonial</span>
            </div>

            <div className='pt-[5vw]'>
                <div className='pl-[3vw] flex gap-[2vw] md:gap-[0.8vw]'>
                    <div className='flex flex-col md:flex-row gap-[6vw] md:gap-[0.8vw]'>
                        <div className='w-[45vw] md:w-[22vw] h-[64vw] md:h-[32vw] relative overflow-hidden rounded-[12px]'>
                            <img src="/images/person1img.webp" alt="person1img" className='object-center object-cover scale-110 h-full' />

                            <div className='absolute bottom-0 flex flex-col pb-4 items-center justify-center bg-gradient-to-t from-black/80 to-transparent inset-x-0'>
                                <h3 className='font-tight text-[5vw] md:text-2xl text-white'>Evan Morita</h3>
                                <p className='font-tight text-white text-[3.2vw] md:text-sm'>Chief Executive Officer</p>
                                <img src="/images/stars-img.svg" alt="rating" className='mt-1' />

                            </div>
                        </div>

                        <div className='flex flex-col justify-between pl-[2vw] pt-[2vw] bg-[#F6F6F6] w-[45vw] md:w-[22vw] h-[64vw] md:h-[32vw] relative overflow-hidden rounded-[12px]'>
                            <img src="/images/testimonial-img.svg" alt="person1img" className='w-[18vw] md:w-[9vw]' />

                            <p className='text-[#5B5B5B] font-tight w-[90%] md:w-[90%] font-normal text-[3.1vw] md:text-[1.3vw]'>“Kanzo Studio transformed our vision into a space that feels both functional and profoundly calming. Every detail was intentional, creating an environment that truly supports productivity and well-being.”
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-[6vw] md:gap-[0.8vw]'>
                    <div className='w-[45vw] md:w-[22vw] h-[64vw] md:h-[32vw] relative overflow-hidden rounded-[12px]'>
                        <img src="/images/person2img.webp" alt="person1img" className='object-center object-cover h-full' />

                        <div className='absolute bottom-0 flex flex-col pb-4 items-center justify-center bg-gradient-to-t from-black/80 to-transparent inset-x-0'>
                            <h3 className='font-tight text-[5vw] md:text-2xl text-white'>Aiko Matsura</h3>
                            <p className='font-tight text-white text-[3.2vw] md:text-sm'>Founder, Matsura Living</p>
                            <img src="/images/stars-img.svg" alt="rating" className='mt-1' />

                        </div>
                    </div>

                    <div className='flex flex-col justify-between pl-[2vw] pt-[2vw] bg-[#F6F6F6] w-[45vw] md:w-[22vw] h-[64vw] md:h-[32vw] relative overflow-hidden rounded-[12px]'>
                        <img src="/images/testimonial-img.svg" alt="person1img" className='w-[18vw] md:w-[9vw]' />

                        <p className='text-[#5B5B5B] font-tight text-[3.3vw] md:text-[1.3vw] w-[100%] md:w-[90%] font-normal'>“The balance of simplicity and sophistication in their work is unmatched. Our new space invites calm, connection, and clarity—exactly what we hoped to achieve.”
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='pt-[15vw]'>

            </div>
        </div>
    )
}
