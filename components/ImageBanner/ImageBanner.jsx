"use client";
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from "next/navigation"
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoIosArrowRoundBack } from "react-icons/io"


const ImageBanner = ({image, right, left, navRight, navLeft, text}) => {
    const router = useRouter()
    const { t } = useTranslation()
  return (
    <div className='relative'>
        <img src={image} alt="arquitectura1" className="w-full lg:h-[500px] h-[400px] object-cover brightness-50" />
        {
            right && <IoIosArrowRoundForward 
            className="cursor-pointer absolute top-1/2 right-10 transform -translate-y-1/2 text-white text-6xl"
            onClick={() =>  router.push(navRight)}
            />
        }
        {
            left && <IoIosArrowRoundBack 
            className="cursor-pointer absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-6xl"
            onClick={() =>  router.push(navLeft)}
            />
        }
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tittle_v2 text-white font-bold">{text}</span>
    </div>
  )
}

export default ImageBanner