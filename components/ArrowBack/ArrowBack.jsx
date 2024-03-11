"use client";
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation"

const ArrowBack = () => {
    const router = useRouter()
  return (
    <div className='w-full flex justify-start p-10'>
        <IoIosArrowRoundBack className="text-4xl text-gray-500 font-light cursor-pointer" onClick={() => router.back()} />
    </div>
  )
}

export default ArrowBack