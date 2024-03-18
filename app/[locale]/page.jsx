import React from 'react'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import { IoIosArrowRoundDown } from "react-icons/io"
import Carousel from '@/components/Carousel/Carousel'
import Footer from '@/components/Footer/Footer'

const namespaces = ['homepage', 'header']
export default async function Home({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    const images = [
        {
            src: '/assets/images/homepage/casa3.jpg',
            alt: 'casa1',
            title : t('homepage_section_2_slide_1_title'),
            desc : t('homepage_section_2_slide_1_text'),
            path : '/proyectos'
        },
        {
            src: '/assets/images/homepage/casa1.jpg',
            alt: 'casa2',
            title : t('homepage_section_2_slide_2_title'),
            desc : t('homepage_section_2_slide_2_text'),
            path : '/interiorismo'
        },
        {
            src: '/assets/images/homepage/casa2.jpg',
            alt: 'casa3',
            title : t('homepage_section_2_slide_3_title'),
            desc : t('homepage_section_2_slide_3_text'),
            path : '/construccion'
        }

    ]

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
                <span className="subtitle lg:w-1/4 text-black">{t('homepage_subtitle')}</span>
                <a href="/filosofia" className="text-black text-md border-b-2 border-black mont">{t('homepage_kwowmore')}</a>
                <IoIosArrowRoundDown className="text-4xl text-black font-light"  />
            </section>
            <section className="normal_section pt-20 min-h-screen bg-white">
                <div className="w-full flex lg:justify-start justify-center">
                    <h1 className="lg:text-3xl text-xl mont lg:w-1/4 text-center lg:text-start">
                        <span className='text-black font-bold mr-2 uppercase'>{t('homepage_section_1_title_1')}</span>
                        <span className='text-black font-light uppercase'>{t('homepage_section_1_title_1_1')}</span>
                    </h1>
                </div>
                <div className='relative w-full flex flex-col py-10'>
                    <img src="/assets/images/homepage/puente.svg" alt="" className="w-full lg:h-[600px] " />
                    <span className="text-black mont lg:text-start text-center text-md lg:w-1/4 py-10 lg:absolute lg:right-0 lg:bottom-60">{t('homepage_section_1_text_1')}</span>
                </div>
                <div className="w-full flex_center gap-4 py-10 lg:pb-40">
                    <span className="text-black text-5xl anton font-bold uppercase ">{t('homepage_section_1_text_2')}</span>
                    <span className="text-black mont text-center text-md lg:text-start lg:w-1/6 w-1/2 ">{t('homepage_section_1_text_3')}</span>
                </div>
            </section>
            <div className="bg-darkgray w-full p-4 flex_center">
                <span className="text-white mont font-bold text-center lg:text-2xl py-10">{t('homepage_section_2_subtitle')}</span>
            </div>
            <Carousel images={images} />
            <section className="normal_section bg-lightgray lg:py-60 py-20 section_doodle">
                <h1 className="text-3xl flex mont flex-col text-center lg:w-1/2 gap-4">
                    <span className='text-black font-medium mont lg:text-lg text-lg'>{t('homepage_section_3_title_1')}</span>
                    <div className='flex flex-col gap-2'>
                        <span className='text-black font-regular mont lg:text-4xl text-xl uppercase'>{t('homepage_section_3_title_2')}</span>
                        <span className='text-black font-regular mont lg:text-4xl text-xl uppercase'>{t('homepage_section_3_title_3')}</span>
                    </div>
                </h1>
            </section>
            <section className="normal_section bg-white py-20 min-h-screen lg:pb-0">
                    <div className='flex justify-end items-center relative z-30'>
                        <img src="/assets/images/homepage/hormigas.png" alt="" className="w-2/3" />
                        <span className="tittle_v3 text-start text-black absolute left-0 lg:top-20 top-10 lg:w-full w-2/3">{t('homepage_section_4_title')}</span>
                    </div>
                    <div className='flex_center_v2 gap-4 relative w-full'>
                        <div className='border-2 border-black lg:w-1/3  w-4/5 p-6 xl:p-20 flex justify-center items-center absolute left-0 lg:left-40 lg:-top-8 -top-4 z-10'>
                            <span className='subtitle_mid text-black'>{t('homepage_section_4_subtitle')}</span>
                        </div>
                        <div className='flex flex-col gap-4 lg:w-1/2 absolute xl:-right-4 lg:top-20 top-[220px] lg:-right-8'>
                                <span className='subtitle_mid text-black'>
                                    {t('homepage_section_4_text_1')}
                                    {t('homepage_section_4_text_2')}
                                </span>
                                <a  href="/filosofia" className="text-black subtitle_mid underline font-medium">{t('homepage_section_4_kwnowmore')}</a>
                        </div> 
                    </div>
            </section>
            <section className="normal_section bg-white py-10 lg:pt-0">
                    <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                    </svg>
                    <div className='relative flex flex-col'>
                        <div className='relative flex lg:justify-center justify-start items-center'>
                            <h1 className="w-1/2 lg:w-1/3 lg:text-5xl text-2xl font-bold font-anton uppercase text-black z-20">{t('homepage_section_5_title')}</h1>
                            <div className='bg-lightergray lg:w-1/2 w-3/4 flex_center_v2 gap-4 lg:p-20 p-10 absolute right-0 lg:top-28 top-24 z-10'>
                                <span className='subtitle_mid text-black'>{t('homepage_section_5_subtitle')}</span>
                                <img src="/assets/images/homepage/logoCIDI.png" alt="" className="absolute right-4 -top-4 w-1/4 lg:-top-20" />
                            </div>
                        </div>
                        <div className='lg:flex justify-center lg:pt-20 z-20 hidden'>
                            <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-center pt-60 lg:hidden'>
                        <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                        </svg>
                    </div>
            </section>
            <section className=" bg-white h-[600px] lg:flex relative hidden">
                <div className='bg-darkgray lg:w-1/2 h-full flex_center lg:p-40 p-20'>
                    <span className='subtitle_mid text-white text-end'>{t('homepage_section_5_text_1')}</span>
                </div>
                <img src="/assets/images/homepage/patricia.png" alt="" className="absolute left-1/2 top-1/4 lg:w-[200px] w-[150px] transform -translate-x-1/2" />
                <div className='lg:w-1/2 h-full flex flex-col justify-center items-center'>
                    <img src="/assets/images/homepage/logopatricia.png" alt="" className="w-1/2" />
                    <a href="/contacto" className="text-black subtitle_mid underline font-medium">{t('homepage_section_5_text_3')}</a>
                </div>
            </section>
            <section className="bg-white flex flex-col relative lg:hidden pt-40">
                <div className='flex flex-col justify-center items-center absolute -top-8 w-full'>
                    <img src="/assets/images/homepage/patricia.png" alt="" className="w-[150px] mx-auto lg:absolute lg:left-1/2 lg:top-1/4 lg:w-[200px] lg:transform lg:-translate-x-1/2" />
                    <img src="/assets/images/homepage/logopatricia.png" alt="" className="w-1/2 absolute -bottom-4" />
                </div>
                <div className='bg-darkgray w-full flex flex-col gap-4 items-center justify-center p-20 '>
                    <span className='subtitle_mid text-white text-center'>{t('homepage_section_5_text_1')}</span>
                    <a href="/contacto" className="text-white subtitle_mid underline font-medium">{t('homepage_section_5_text_3')}</a>
                </div>
            </section>

            <LanguageSwitcher />
            <Footer />
        </main>
        </TranslationsProvider>
    )
}