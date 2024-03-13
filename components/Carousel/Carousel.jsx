"use client";
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import { useTranslation } from 'react-i18next'
import { useRouter } from "next/navigation"



const Carousel = ({images}) => {
    const { t } = useTranslation()
    const router = useRouter()
  return (
    <div className="carousel w-full">
        {
            images.map((image, index) => (
                <div key={index} id={index} className="carousel-item flex justify-center w-full relative">
                    <img src={image.src} className="w-full lg:h-[800px] h-[400px] object-cover brightness-50" alt={image.alt} />
                    <div className='xs:hidden lg:block'>
                      {
                        images[index+1] ? <a href={`#${index+1}`} className="absolute top-1/2 right-10 transform -translate-y-1/2"> <IoIosArrowRoundForward className='text-white text-6xl'/> </a> : <a href={`#0`} className=" absolute top-1/2 right-10 transform -translate-y-1/2"> <IoIosArrowRoundForward className='text-white text-6xl'/> </a>
                      }
                      <h1 className="absolute top-1/2 left-20 text-white text-6xl font-regular mont uppercase m-0">{image.title}</h1>
                      <div className="absolute bottom-20 right-20 text-white text-2xl font-light mont w-1/3 flex flex-col">
                        <span className="text-white text-lg  mont font-medium">{image.desc}</span>
                        <button className="text-start text-white text-lg font-medium underline mont" onClick={() => router.push(image.path)}> {t('homepage_section_2_slides_more') }</button>
                      </div>
                    </div>
                    <div className='lg:hidden absolute top-1/2'>
                      <div className='flex_center gap-4'>
                        <h1 className="text-white text-4xl font-regular mont uppercase m-0">{image.title}</h1>
                        <button className="text-start text-white text-lg font-medium underline mont" onClick={() => router.push(image.path)}> {t('homepage_section_2_slides_more') }</button>
                      </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Carousel