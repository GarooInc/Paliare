import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Footer from '@/components/Footer/Footer'
import Carousel from '@/components/Carousel/Carousel'
import Timeline from '@/components/Timeline/Timeline'

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
                <Timeline />
                <Footer />
            </section>
            <LanguageSwitcher />
        </TranslationsProvider>
    )
}