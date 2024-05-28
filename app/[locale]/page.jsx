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

    function boldUppercase(text) {
        return text.split(' ').map(word => {
            if (word === word.toUpperCase() && /^[A-Z]+$/.test(word)) {
            return `<strong>${word}</strong>`;
          }
          return word;
        }).join(' ');
      }

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="flex min-h-screen w-full flex-col">
            <NavBar primary/>
            <section className="firstSection lg:pt-10 section_img_background gap-2">
                <div className='h-40'>
                    <img
                        className="h-32 w-auto lg:block xs:hidden"
                        src="/assets/images/homepage/Paliare-black.png"
                        alt=""
                    />
                </div>
                <h1 className="maintitle md:pt-4">{t('homepage_title')}</h1>
                <span className="subtitle md:px-0 px-4 lg:w-full text-black">{t('homepage_subtitle')}</span>
                <img 
                    className="w-full md:h-[520px] h-[400px] object-cover"
                    src="/assets/images/homepage/fondo.png"
                    alt=""
                />
            </section>
            <section className="normal_section pt-20 min-h-screen bg-white">
                <div className="w-full flex lg:justify-start justify-center">
                    <h1 className="lg:text-3xl text-xl mont lg:w-1/4 text-center lg:text-start tracking-wider">
                        <span className='text-black font-bold mr-2 uppercase'>{t('homepage_section_1_title_1')}</span>
                        <span className='text-black font-light uppercase'>{t('homepage_section_1_title_1_1')}</span>
                    </h1>
                </div>
                <div className='relative w-full flex flex-col py-10'>
                    <img src="/assets/images/homepage/puente.svg" alt="" className="w-full lg:h-[600px] " />
                    <span className="text-black  mont lg:text-start text-center text-md lg:w-1/4 py-10 lg:absolute lg:right-0 lg:bottom-60">{t('homepage_section_1_text_1')}</span>
                </div>
                <div className="w-full flex_center gap-6 py-10 lg:pb-40 pb-0">
                    <span className="text-black md:text-6xl text-4xl anton tracking-wider font-bold uppercase ">{t('homepage_section_1_text_2')}</span>
                    <span className="text-black mont text-center tracking-wide text-md lg:text-start lg:w-1/6 w-1/2 ">{t('homepage_section_1_text_3')}</span>
                </div>
            </section>
            <div className="bg-darkgray w-full p-4 flex_center">
                <span className="text-white mont font-bold text-center lg:text-2xl py-10">{t('homepage_section_2_subtitle')}</span>
            </div>
            <Carousel images={images} text={t ('homepage_section_2_slides_more')} />
            <section className="normal_section bg-lightgray lg:py-60 py-20 section_doodle">
                <h1 className="text-3xl flex mont flex-col text-center md:w-1/2 gap-6">
                    <div className='flex flex-col md:gap-2'>
                        <span className='text-black font-normal mont lg:text-xl text-lg'>{t('homepage_section_3_title_0')}</span>
                        <span className='text-black font-normal mont lg:text-xl text-lg'>{t('homepage_section_3_title_1')}</span>
                    </div>
                    <div className='flex flex-col md:gap-4'>
                        <span className='text-black font-regular mont lg:text-5xl text-xl uppercase'>{t('homepage_section_3_title_2')}</span>
                        <span className='text-black font-regular mont lg:text-5xl text-xl uppercase'>{t('homepage_section_3_title_3')}</span>
                    </div>
                </h1>
            </section>
            <section className="normal_section bg-white pt-20 lg:pb-0">
                <div className='flex md:flex-row flex-col justify-start items-center w-full gap-8 md:h-[500px]'>
                    <div className='flex flex-col justify-start items-center gap-4 md:w-1/2 h-full'>
                        <span className="tittle_v3 md:w-[320px] md:text-4xl text-2xl text-black font-medium tracking-wider text-center">{t('homepage_section_4_title')}</span>
                        <img src="/assets/images/homepage/hormigas.png" alt="" className=" w-1/2 py-10 md:w-[200px]" />
                    </div>
                    <div className='flex flex-col justify-start items-center gap-4 md:w-1/3 h-full'>
                        <span className='subtitle_mid text-black md:text-start'>{t('homepage_section_4_subtitle')}</span>
                        <span className="small_subtitle text-black  md:text-start">{t('homepage_section_4_text_1')} </span>
                        <span className="small_subtitle text-black  md:text-start" dangerouslySetInnerHTML={{ __html: boldUppercase(t('homepage_section_4_text_2')) }}></span>
                        <a  href="/filosofia" className="text-black subtitle_mid underline font-medium w-full md:text-start">{t('homepage_section_4_kwnowmore')}</a>
                    </div>
                </div>
            </section>
            <section className="normal_section bg-white py-10 lg:pt-0">
                    <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                    </svg>
                    <img src="/assets/images/homepage/logoCIDI.png" alt="" className="md:w-32 w-20 my-8" />
                    <div className='flex flex-col lg:justify-center justify-start items-center text-center gap-4'>
                        <h1 className="title_cidi tracking-wider m-0">{t('homepage_section_5_title')}</h1>
                        <span className='subtitle_mid text-black md:w-1/2'>{t('homepage_section_5_subtitle')}</span>
                    </div>
                    <div className='flex justify-center py-20'>
                        <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                        </svg>
                    </div>
            </section>
            <section className=" bg-white h-[600px] lg:flex relative hidden">
                <div className='bg-darkgray lg:w-1/2 h-full flex_center lg:p-56 p-20'>
                    <span className='small_subtitle text-white text-end'>{t('homepage_section_5_text_1')}</span>
                </div>
                <img src="/assets/images/homepage/trio.png" alt="" className="absolute left-1/2 top-24 lg:w-[300px] transform -translate-x-1/2" />
                <div className='lg:w-1/2 h-full flex flex-col justify-center items-center'>
                    <img src="/assets/images/homepage/logopatricia.png" alt="" className="w-1/2" />
                    <a href="/contacto" className="text-black small_subtitle underline font-medium">{t('homepage_section_5_text_3')}</a>
                </div>
            </section>
            <section className="bg-white flex flex-col relative lg:hidden pt-40">
                <div className='flex flex-col justify-center items-center absolute -top-12 w-full'>
                    <img src="/assets/images/homepage/trio.png" alt="" className="w-[200px] mx-auto" />
                    <img src="/assets/images/homepage/logopatricia.png" alt="" className="w-1/2 absolute -bottom-4" />
                </div>
                <div className='bg-darkgray w-full flex flex-col gap-4 items-center justify-center px-16 py-24'>
                    <span className='small_subtitle text-white text-center'>{t('homepage_section_5_text_1')}</span>
                    <a href="/contacto" className="text-white small_subtitle underline font-medium">{t('homepage_section_5_text_3')}</a>
                </div>
            </section>

            <LanguageSwitcher />
            <Footer />
        </main>
        </TranslationsProvider>
    )
}