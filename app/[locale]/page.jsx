import React from 'react'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
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
            if (word === word.toUpperCase() && /^[A-Z]+.$/.test(word)) {
            return `<strong>${word}</strong>`;
          }
          return word;
        }).join(' ');
    }

    function underlineUppercase(text) {
        return text.split(' ').map(word => {
            if (word === word.toUpperCase() && /^[A-Z]+.$/.test(word)) {
                return `<span class='subtitle_mid text-black md:text-start text-center tracking-wider' style='text-decoration: underline; text-transform:lowercase;'>${word}</span>`;
            }
            return word;
        }).join(' ');
    }
    

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <main className="flex min-h-screen w-full flex-col">
            <NavBar primary/>
            <section className="firstSection section_img_background gap-2">
                <div className='lg:h-32 h-10'>
                    <img
                        className="lg:h-32 md:h-28 w-auto lg:block xs:hidden"
                        src="/assets/images/homepage/Paliare-black.png"
                        alt=""
                    />
                </div>
                <h1 className="maintitle md:pt-10 lg:pt-0">{t('homepage_title')}</h1>
                <span className="subtitle md:px-0 px-14 lg:w-full text-black font-semibold uppercase">{t('homepage_subtitle')}</span>
                <img 
                    className="w-full md:h-[520px] h-[400px] object-cover md:block hidden"
                    src="/assets/images/homepage/fondo.png"
                    alt=""
                />
            </section>
            <section className="normal_section lg:pt-20 lg:pb-0 py-10 min-h-screen bg-white">
                <div className="w-full flex lg:justify-start justify-center">
                    <h1 className="lg:text-3xl text-xl mont lg:w-1/3 w-3/4 text-center lg:text-start tracking-wider">
                        <span className='text-black font-bold mr-2 uppercase'>{t('homepage_section_1_title_1')}</span>
                        <span className='text-black font-light uppercase'>{t('homepage_section_1_title_1_1')}</span>
                    </h1>
                </div>
                <div className='relative w-full flex flex-col lg:py-10 pt-10'>
                    <img src="/assets/images/homepage/puente.svg" alt="" className="w-full md:h-[600px] " />
                    <div className='lg:py-0 py-10 flex flex-col'>
                        <span className="text-black  mont lg:text-start text-center text-md lg:w-1/4 py-10 lg:absolute lg:right-0 lg:bottom-60 tracking-wider">{t('homepage_section_1_text_1')}</span>
                        <a href='/filosofia' className="text-black font-bold small_subtitle text-center tracking-wider underline lg:hidden">{t('homepage_kwowmore')}</a>
                    </div>
                </div>
                <div className='lg:hidden flex justify-center items-center'>
                    <img src="/assets/images/homepage/rect.png" alt="" className="w-1/2 md:w-2/3" />
                </div>
                <div className="w-full flex_center gap-6 py-10 lg:pb-40 pb-0">
                    <span className="text-black md:text-6xl text-5xl anton tracking-wider font-bold uppercase ">{t('homepage_section_1_text_2')}</span>
                    <span className="text-black mont text-center text-md lg:text-start lg:w-1/5 w-3/4 subtitle ">{t('homepage_section_1_text_3')}</span>
                </div>
            </section>
            <div className="bg-darkgray w-full p-4 flex_center">
                <span className="text-white mont font-bold text-center lg:text-2xl py-10 tracking-wider">{t('homepage_section_2_subtitle')}</span>
            </div>
            <Carousel images={images} text={t ('homepage_section_2_slides_more')} />
            <section className="normal_section bg-lightgray lg:py-60 md:py-40 py-20 section_doodle">
                <h1 className="text-3xl flex mont flex-col text-center lg:w-3/4 gap-6">
                    <div className='flex flex-col md:gap-2'>
                        <span className='text-black font-normal mont md:text-xl text-sm tracking-wider'>{t('homepage_section_3_title_0')}</span>
                        <span className='text-black font-normal mont md:text-xl text-sm tracking-wider'>{t('homepage_section_3_title_1')}</span>
                    </div>
                    <div className='flex flex-col lg:gap-4 w-full'>
                        <span className='text-black font-regular mont md:text-5xl text-lg uppercase tracking-wider xs:tracking-wide'>{t('homepage_section_3_title_2')}</span>
                        <span className='text-black font-regular mont md:text-5xl text-lg uppercase tracking-wider xs:tracking-wide'>{t('homepage_section_3_title_3')}</span>
                    </div>
                </h1>
            </section>
            <section className="normal_section bg-white pt-20 lg:pt-40 lg:pb-0">
                <div className='flex md:flex-row flex-col justify-start items-center w-full gap-8 md:h-[500px]'>
                    <div className='flex lg:flex-col flex-col-reverse lg:justify-start md:justify-evenly items-center gap-4 md:w-1/2 h-full'>
                        <span className="tittle_v3 md:w-[320px] md:text-4xl text-2xl text-black font-medium tracking-widest text-center">{t('homepage_section_4_title')}</span>
                        <img src="/assets/images/homepage/hormigas.png" alt="" className=" w-1/2 lg:py-10 md:w-[200px]" />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center items-center gap-6 md:w-1/3 h-full'>
                        <span className='subtitle_mid text-black md:text-start text-center tracking-wider' dangerouslySetInnerHTML={{ __html: underlineUppercase(t('homepage_section_4_subtitle')) }}></span>
                        <span className="small_subtitle text-black  md:text-start text-center tracking-wider">{t('homepage_section_4_text_1')} </span>
                        <span className="small_subtitle text-black  md:text-start text-center tracking-wider" dangerouslySetInnerHTML={{ __html: boldUppercase(t('homepage_section_4_text_2')) }}></span>
                        <a  href="/filosofia" className="text-black subtitle_mid underline font-medium w-full md:text-start text-center tracking-wider">{t('homepage_section_4_kwnowmore')}</a>
                    </div>
                </div>
            </section>
            <section className="normal_section bg-white py-10 lg:pt-0">
                    <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                    </svg>
                    <img src="/assets/images/homepage/logoCIDI.png" alt="" className="md:w-32 w-24 my-8" />
                    <div className='flex flex-col md:justify-center justify-start md:items-center md:text-center gap-4 md:gap-10 py-10'>
                        <h1 className="title_cidi tracking-wider m-0">{t('homepage_section_5_title')}</h1>
                        <span className='subtitle_cidi text-black md:w-1/2 w-2/3'>{t('homepage_section_5_subtitle')}</span>
                    </div>
                    <div className='flex justify-center lg:py-20 py-10'>
                        <svg width="1" height="194" viewBox="0 0 1 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="-2.18557e-08" x2="0.500008" y2="194" stroke="black"/>
                        </svg>
                    </div>
            </section>
            <section className=" bg-white h-[600px] lg:flex relative hidden">
                <div className='bg-darkgray lg:w-1/2 h-full flex_center md:p-56 p-20'>
                    <span className='small_subtitle text-white text-end'>{t('homepage_section_5_text_1')}</span>
                </div>
                <img src="/assets/images/homepage/trio.png" alt="" className="absolute left-1/2 top-24 lg:w-[300px] transform -translate-x-1/2" />
                <div className='lg:w-1/2 h-full flex flex-col justify-center items-center'>
                    <img src="/assets/images/homepage/logopaty.png" alt="" className="w-1/3" />
                    <a href="/contacto" className="text-black small_subtitle underline font-medium tracking-wider">{t('homepage_section_5_text_3')}</a>
                </div>
            </section>
            <section className="bg-white flex flex-col relative lg:hidden pt-40">
                <div className='flex flex-col justify-center items-center absolute -top-12 w-full'>
                    <img src="/assets/images/homepage/trio.png" alt="" className="w-[200px] mx-auto md:inset-x-0" />
                    <img src="/assets/images/homepage/logopaty.png" alt="" className="w-2/3 absolute -bottom-16 mx-auto inset-x-0 md:w-[250px] md:-bottom-20" />
                </div>
                <div className='bg-darkgray w-full flex flex-col items-center justify-center px-16 pt-32 pb-24 md:px-24 gap-8 md:gap-4'>
                    <span className='small_subtitle text-white text-center mt-10 md:mt-16'>{t('homepage_section_5_text_1')}</span>
                    <a href="/contacto" className="text-white small_subtitle underline font-medium">{t('homepage_section_5_text_3')}</a>
                </div>
            </section>

            <LanguageSwitcher />
            <Footer />
        </main>
        </TranslationsProvider>
    )
}