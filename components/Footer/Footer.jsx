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
    <footer className="footer flex justify-between items-center p-10 bg-lightergray">
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
        <img src="/assets/images/homepage/Paliare-black.png" alt="logo" className="w-32" /> 
        <nav className="flex justify-center items-center lg:gap-8">
            <span className="text-darkgray mont lg:text-md xs:text-xs tracking-wider">{t('header:lemma')}</span>
            <div className='flex gap-2'>
            <BsInstagram className="text-darkgray text-2xl" />
            <FaFacebookF className="text-darkgray text-2xl" />
            </div>
        </nav>
    </footer>
  )
}

export default Footer