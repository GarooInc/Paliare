"use client";
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from "next/navigation"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"

const Footer = () => {
    const { t } = useTranslation()
    const navigation = [
        { name: t('header:menu_home'), href: '/' },
        { name: t('header:menu_philosophy'), href: '/filosofia' },
        { name: t('header:menu_projects'), href: '/projects' },
        { name: t('header:menu_services'), href: '/services' },
        { name: t('header:menu_contact'), href: '/contacto' },
      ]
    
    const router = useRouter()

  return (
    <footer className="footer flex justify-between items-center md:p-10 p-8 bg-lightergray">
        <div className='flex flex-col w-full lg:gap-0 md:gap-2'>
            <div className='flex justify-between items-center w-full'>
                <aside className="items-center grid-flow-col xs:hidden lg:block">
                    {
                        navigation.map((item, index) => (
                            <button key={index} className="text-darkgray mont lg:text-md xs:text-xs" onClick={() => router.push(item.href)}>
                                {item.name} 
                                {index+1 !== navigation.length && <span className="mx-2">•</span>}
                            </button>
                        ))
                    }
                </aside>
                <img src="/assets/images/homepage/Paliare-black.png" alt="logo" className="lg:w-32 w-20" /> 
                <nav className="flex justify-center items-center lg:gap-8 gap-4">
                    <span className="text-darkgray mont lg:text-md xs:text-[8px] text-center tracking-wider leading-4">{t('header:lemma')}</span>
                    <div className='flex gap-2'>
                    <BsInstagram className="text-darkgray text-2xl" />
                    <FaFacebookF className="text-darkgray text-2xl" />
                    </div>
                </nav>
            </div>
            <a className="text-darkgray mont text-[10px] text-center w-full m-0" href='https://garooinc.com/'>By Garoo, Inc</a>
        </div>
    </footer>
  )
}

export default Footer