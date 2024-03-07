"use client";
import React, { useState, useEffect } from 'react'
import { textsEN } from '@/public/locales/en'
import { textsES } from '@/public/locales/es'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll"
import { useRouter } from "next/navigation"



const NavBar = () => {
    const [language, setLanguage] = useState('')

    const textos = language === 'en' ? textsEN : textsES
    
    useEffect(() => {
        const lang = localStorage.getItem('language')
        if (lang) setLanguage(lang)
    }, [])

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

    console.log('language menu', language)

    const navigation = [
      { name: textos.menu_home, href: '/'},
      { name: textos.menu_philosophy, href: '/filosofia' },
      { name: textos.menu_projects, href: '/proyectos' },
      { name: textos.menu_services, href: '/servicios' },
      { name: textos.menu_contact, href: '/contacto' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()

    const onClickNav = (href) => {
      router.push(href)
      setMobileMenuOpen(false)
    }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-0">
              <div className="h-24">
              <img
                className="lg:hidden h-24 w-auto"
                src="/assets/images/paliarenegro.png"
                alt=""
              />
              </div>
            </a>
          </div>
          <div className="flex ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog as="div" className="" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed top-0 lg:inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-8 lg:py-2 sm:max-w-sm md:max-w-full lg:max-w-full sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="lg:h-40 h-24 w-auto"
                  src="/assets/images/paliareblanco.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
                  {navigation.map((item) => (
                    <button onClick={() => onClickNav(item.href)} key={item.name}
                    className="lg:ml-40 ml-20 uppercase block py-4 text-2xl lg:text-4xl font-semibold leading-7 font-anton text-white cursor-pointer">
                      {item.name}
                    </button>
                  ))}
            </div>
            <div className="mt-6">
              <LanguageSwitcher onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')} />
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
