"use client";
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import { useTranslation } from 'react-i18next'
import { useRouter } from "next/navigation"



const Carousel = ({images, text}) => {
    const { t } = useTranslation()
    const router = useRouter()
  return (
    <div className="w-full">
        {
                images.map((image, index) => (
                    <div key={index} id={index} className="carousel-item flex justify-center w-full relative">
                        <img src={image.src} className="w-full lg:h-[800px] h-[400px] object-cover brightness-50" alt={image.alt} />
                        <div className='flex flex-col absolute lg:top-1/2 top-40 gap-6 justify-center items-center'>
                            <h1 className="text-white md:text-6xl text-4xl font-regular m-0 anton uppercase text-center tracking-widest">{image.title}</h1>
                            <a href={image.path} className="text-white md:text-lg text-sm font-bold mont flex flex-col underline tracking-wider">
                                {text}
                            </a>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default Carousel