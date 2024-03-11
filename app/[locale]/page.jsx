import React from 'react'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import { IoIosArrowRoundDown } from "react-icons/io"

const namespaces = ['homepage', 'header']
export default async function Home({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="flex min-h-screen w-full flex-col lg:pt-20">
            <NavBar primary/>
            <section className="normal_section lg:pt-20 section_img_background gap-2">
                <div className='h-40'>
                    <img
                        className="h-28 w-auto lg:block xs:hidden"
                        src="/assets/images/homepage/logonegro.png"
                        alt=""
                    />
                </div>
                <h1 className="maintitle ">{t('homepage_title')}</h1>
                <span className="subtitle lg:w-1/4">{t('homepage_subtitle')}</span>
                <a href="/filosofia" className="text-md border-b-2 border-black mont">{t('homepage_kwowmore')}</a>
                <IoIosArrowRoundDown className="text-4xl text-black font-light"  />
            </section>
            <section className="normal_section pt-20 min-h-screen">
                <div className="w-full flex lg:justify-start justify-center">
                    <h1 className="text-3xl mont lg:flex lg:flex-col lg:w-1/3 text-center lg:text-start">
                        <span className='font-bold mr-2'>{t('homepage_section_1_title_1')}</span>
                        <span className='font-light'>{t('homepage_section_1_title_1_1')}</span>
                    </h1>
                </div>
                <div className='relative w-full flex flex-col py-10'>
                    <img src="/assets/images/homepage/puente.svg" alt="" className="w-full lg:h-[600px] " />
                    <span className="mont lg:text-start text-center text-md lg:w-1/4 py-10 lg:absolute lg:right-0 lg:bottom-60">{t('homepage_section_1_text_1')}</span>
                </div>
                <div className="w-full flex_center gap-2 pt-10">
                    <span className="text-5xl anton font-bold uppercase">{t('homepage_section_1_text_2')}</span>
                    <span className="mont text-center text-md lg:text-start lg:w-1/6 w-1/2">{t('homepage_section_1_text_3')}</span>
                </div>
            </section>
            <LanguageSwitcher />
        </main>
        </TranslationsProvider>
    )
}