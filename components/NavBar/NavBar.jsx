"use client";
import React, { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation"
import { useTranslation } from 'react-i18next'



const NavBar = ({primary, transparent, black, namepage}) => {
    const { t } = useTranslation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const router = useRouter()

    const navigation = [
      { name: t('header:menu_home'), href: '/' },
      { name: t('header:menu_philosophy'), href: '/filosofia' },
      { name: t('header:menu_projects'), href: '/proyectos', hasSubmenu: true },
      { name: t('header:menu_services'), href: '/servicios' },
      { name: t('header:menu_contact'), href: '/contacto' },
    ]

    const projectSubmenu = [
      { name:t('header:menu_arq'), href: '/proyectos' },
      { name:t('header:menu_int'), href: '/interiorismo' },
      { name:t('header:menu_cons'), href: '/construccion' },
    ]

    const onClickNav = (item) => {
      if (item.hasSubmenu) {
        setSubmenuOpen(!submenuOpen)  // Toggle submenu visibility
      } else {
        router.push(item.href)
        setMobileMenuOpen(false)
      }
    }

  return (
    <header className={transparent ? "absolute inset-x-0 top-0 z-50 bg-transparent" : `lg:block inset-x-0 top-0 ${primary ? 'lg:bg-white bg-transparent absolute z-50 lg:relative' : 'bg-white'}`}>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex">
            <a href="#" className="-m-1.5 p-0">
              <div className="h-20">
              <img
                className= {primary ? "lg:hidden h-20 lg:w-40 w-32 object-contain lg:p-4" : "h-20 lg:w-40 w-32 object-contain lg:p-4 lg:w-auto outline-none focus:outline-none"}
                src={transparent ? "/assets/images/Paliare-blanco.png" : "/assets/images/Paliare-black.png"}
                alt=""
                onClick = {() => router.push('/')}
                style={black ? {filter: 'invert(1)'} : {filter: 'invert(0)'}}
              />
              </div>
            </a>
          </div>
          {
            namepage && (
              <div className="text-center lg:m-0 mr-14">
                <h1 className={transparent && !black ? "page_title text-white" : "page_title text-black"}>{t(`header:${namepage}`)}</h1>
              </div>
            )
          }
          <div className="flex md:w-40 justify-end items-start">
            <button
              type="button"
              className={transparent ? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" : 
              "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"}
              onClick={() => setMobileMenuOpen(true)}
              style={black ? {filter: 'invert(1)'} : {filter: 'invert(0)'}}
            >
              <Bars3Icon className="h-6 w-6 focus:outline-none" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog as="div" className="" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed top-0 lg:inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black sm:max-w-sm md:max-w-full lg:max-w-full sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between p-6 lg:px-8">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-0 outline-none focus:outline-none">
                  <div className="h-20">
                    <img
                      className="h-20 lg:w-40 w-32 object-contain lg:p-4 lg:w-auto outline-none focus:outline-none"
                      src="/assets/images/Paliare-blanco.png"
                      alt=""
                      onClick = {() => router.push('/')}
                    />
                  </div>
                </a>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white outline-none focus:outline-none" aria-hidden="true" />
              </button>
            </div>
            <div className="lg:p-0 py-10 lg:mt-20 flow-root">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <button className="nav_item" onClick={() => onClickNav(item)}>
                          {item.name}
                        </button>
                        {item.hasSubmenu && submenuOpen && (
                          <div className="pl-4">
                            {projectSubmenu.map(sub => (
                              <button key={sub.name} className="nav_item2" onClick={() => {
                                router.push(sub.href);
                                setMobileMenuOpen(false);
                              }}>
                                {sub.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
