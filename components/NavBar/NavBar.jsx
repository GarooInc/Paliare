"use client";
import React, { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation"
import { useTranslation } from 'react-i18next'



const NavBar = ({primary, transparent}) => {
    const { t } = useTranslation()

    const navigation = [
      { name: t('header:menu_home'), href: '/' },
      { name: t('header:menu_philosophy'), href: '/filosofia' },
      { name: t('header:menu_projects'), href: '/proyectos' },
      { name: t('header:menu_services'), href: '/services' },
      { name: t('header:menu_contact'), href: '/contacto' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()

    const onClickNav = (href) => {
      router.push(href)
      setMobileMenuOpen(false)
    }

  return (
    <header className={transparent ? "absolute inset-x-0 top-0 z-50 bg-transparent" : "absolute inset-x-0 top-0 z-50 bg-white"} >
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-0">
              <div className="h-20">
              <img
                className= {primary ? "lg:hidden h-20 w-auto" : "h-20 w-auto"}
                src={transparent ? "/assets/images/homepage/logoblanco.png" : "/assets/images/homepage/logonegro.png"}
                alt=""
                onClick = {() => router.push('/')}
              />
              </div>
            </a>
          </div>
          <div className="flex ">
            <button
              type="button"
              className={transparent ? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" : "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 focus:outline-none" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog as="div" className="" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed top-0 lg:inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-8 lg:py-2 sm:max-w-sm md:max-w-full lg:max-w-full sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <img
                  className="lg:h-20 h-24 w-auto outline-none focus:outline-none"
                  src="/assets/images/homepage/logoblanco.png"
                  alt=""
                  onClick = {() => router.push('/')}
                />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white outline-none focus:outline-none" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 lg:mt-20 flow-root">
                  {navigation.map((item) => (
                    <button onClick={() => onClickNav(item.href)} key={item.name}
                    className="lg:ml-40 ml-20 uppercase block py-4 text-2xl lg:text-4xl font-semibold leading-7 font-anton text-white cursor-pointer">
                      {item.name}
                    </button>
                  ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
