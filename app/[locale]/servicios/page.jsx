import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Footer from '@/components/Footer/Footer'
import Carousel from '@/components/Carousel/Carousel'

const namespaces = ['Servicios','header']

export default async function Servicios({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    const gridContent = [
        {
            img: '/assets/images/servicios/2.png',
            boldText : t('services_section_2_text_1'),
            text: t('services_section_2_text_1_1')
        },
        {
            img: '/assets/images/servicios/11.png',
            boldText : t('services_section_2_text_2'),
            text: t('services_section_2_text_2_1')
        },
        {
            img: '/assets/images/servicios/12.png',
            boldText : t('services_section_2_text_3'),
            text: t('services_section_2_text_3_1')
        },
        {
            img: '/assets/images/servicios/6.png',
            boldText : t('services_section_2_text_4'),
            text: t('services_section_2_text_4_1')
        }
    ]

    const images = [
        {
            src: '/assets/images/homepage/casa3.jpg',
            alt: 'casa1',
            title : t('services_section_2_slide_3_title'),
            path : '/proyectos'
        },
        {
            src: '/assets/images/homepage/casa1.jpg',
            alt: 'casa2',
            title : t('services_section_2_slide_2_title'),
            path : '/interiorismo'
        },
        {
            src: '/assets/images/homepage/casa2.jpg',
            alt: 'casa3',
            title : t('services_section_2_slide_1_title'),
            path : '/construccion'
        }

    ]

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <section className="flex min-h-screen w-full flex-col lg:pt-20 bg-lightergray">
                <NavBar transparent black namepage={"servicios"}/>
                <div className="normal_section lg:py-28 pt-40 pb-20  gap-2 ">
                    <h1 className="text_anton  text-center text-black tracking-widest w-full">{t('services_title')}</h1>
                    <span className="small_subtitle lg:w-1/3 text-center text-black">{t('services_subtitle')}</span>
                    <img src= {`/assets/images/servicios/${t('moodboard')}`} alt="servicios1" className="w-full lg:h-[600px] object-contain" />
                </div>
                <div className='stretch_section lg:py-40 py-20 bg-white'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-2'>
                        <div className='lg:w-1/2 lg:flex lg:justify-end'>
                            <h1 className="text_anton tracking-widest lg:w-2/3 lg:m-0 lg:text-start text-center text-black">{t('services_title_2')}</h1>
                        </div>
                        <div className='flex flex-col gap-4 lg:w-1/2 justify-center'>
                            <span className="small_subtitle lg:text-start text-center text-black">{t('services_text_3')}</span>
                            <span className="small_subtitle lg:text-start text-center font-medium text-black">{t('services_text_4')}</span>
                        </div>
                    </div>
                </div>
                <Carousel images={images} text={t('services_section_loadmore')} />
                <div className='normal_section py-4 lg:py-10 bg-white'>
                    <h1 className="subtitle_mid font-medium text-center tracking-widest uppercase text-black">{t('services_section_2_title')}</h1>
                </div>
                <div className='grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2'>
                    {
                        gridContent.map((content, index) => (
                            <div key={index} className='flex flex-col gap-4 justify-between relative'>
                                <img src={content.img} alt={`servicios${index}`} className="lg:h-[600px] h-[300px] object-cover brightness-50" />
                                <div className='flex absolute lg:bottom-2 bottom-8 p-2 lg:w-[250px] lg:pl-10 justify-start items-start h-1/4'>
                                    <span 
                                    className={index % 2 === 0 ? "mont text-white uppercase font-bold lg:text-md text-sm leading-6" : "mont text-white uppercase font-light lg:text-md text-sm leading-6"} >
                                        {content.boldText}
                                        <span className={index % 2 === 0 ? "mont text-white uppercase font-light mx-2 lg:text-md text-sm leading-6" : "mont text-white uppercase font-bold mx-2 lg:text-md text-sm leading-6"}>
                                            {content.text}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='normal_section py-10 bg-white'>
                    <h1 className="tittle_v2 font-bold text-black py-10 tracking-widest">{t('services_process_header')}</h1>
                    <ul className="timeline timeline-vertical">
                    <li>
                    <hr className="bg-black"/>
                        <div className="self-start">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 0.499999C25.3366 0.499999 32.5 7.66344 32.5 16.5C32.5 25.3366 25.3366 32.5 16.5 32.5C7.66344 32.5 0.5 25.3366 0.499999 16.5C0.499999 7.66344 7.66344 0.5 16.5 0.499999ZM16 7.5C20.6693 7.5 24.5 11.5036 24.5 16.5C24.5 21.4964 20.6693 25.5 16 25.5C11.3307 25.5 7.5 21.4964 7.5 16.5C7.5 11.5036 11.3307 7.5 16 7.5ZM25.5 16.5C25.5 11.003 21.2718 6.5 16 6.5C10.7282 6.5 6.5 11.003 6.5 16.5C6.5 21.997 10.7282 26.5 16 26.5C21.2718 26.5 25.5 21.997 25.5 16.5Z" fill="white" stroke="black"/>
                            <ellipse cx="16" cy="16.5" rx="9.5" ry="9" transform="rotate(-90 16 16.5)" fill="black"/>
                            </svg>
                        </div>
                        <div className="timeline-start lg:px-4 pr-4">
                            <img src="/assets/images/servicios/1.jpg" alt="servicios7" className="lg:w-[400px] lg:h-[400px] h-[200px] object-cover" />
                        </div>
                        <div className="timeline-end flex flex-col justify-start items-start lg:p-4 pl-4">
                            <h1 className="anton text-xl lg:text-3xl text-black uppercase tracking-widest">{t('services_process_title_1')}</h1>
                            <span className="subtitle_mid text-black text-start">{t('services_process_text_1')}</span>
                        </div>
                        <hr className="bg-black"/>
                    </li>
                    <li>
                    <hr className="bg-black"/>
                        <div className="timeline-middle">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.5" cy="16.5" r="16" transform="rotate(-90 16.5 16.5)" fill="white" stroke="black"/>
                            </svg>
                        </div>
                        <div className="timeline-start flex flex-col justify-start items-end lg:p-4 pr-4 py-4">
                            <h1 className="anton text-xl lg:text-3xl text-black text-end uppercase tracking-widest">{t('services_process_title_2')}</h1>
                            <span className="subtitle_mid text-black text-end">{t('services_process_text_2')}</span>
                        </div>
                        <div className="timeline-end lg:px-4 pl-4">
                            <img src="/assets/images/servicios/9.jpg" alt="servicios8" className="lg:w-[400px] lg:h-[400px] h-[200px] object-cover" />
                        </div>
                        <hr className="bg-black"/>
                    </li>
                    <li>
                        <hr className="bg-black"/>
                        <div className="timeline-start lg:px-4 pr-4 py-4">
                           <img src="/assets/images/servicios/3.jpg" alt="servicios9" className="lg:w-[400px] lg:h-[400px] h-[200px] object-cover" />
                        </div>
                        <div className="timeline-middle">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16.5" cy="16.5" r="16" transform="rotate(-90 16.5 16.5)" fill="white" stroke="black"/>
                            </svg>
                        </div>
                        <div className="timeline-end flex flex-col justify-start items-start lg:p-4 pl-4 py-4">
                            <h1 className="anton text-xl lg:text-3xl text-black uppercase tracking-widest">{t('services_process_title_3')}</h1>
                            <span className="subtitle_mid text-black text-start">{t('services_process_text_3')}</span>
                        </div>
                    </li>
                    </ul>
                </div>
                <Footer />
            </section>
            <LanguageSwitcher />
        </TranslationsProvider>
    )
}