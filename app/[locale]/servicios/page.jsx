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

    function SplitText({ text }) {
        const [firstPart, secondPart] = text.split('.');
        return (
            <>
                {firstPart}.
                <br />
                <br />
                {secondPart}
            </>
        );
    }

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <section className="flex lg:min-h-screen w-full flex-col lg:pt-20 bg-lightergray">
                <NavBar transparent black namepage={t('header:menu_services')} />
                <div className="normal_section lg:py-28 pt-28 pb-10  gap-2 ">
                    <h1 className="text_anton  text-center text-black tracking-widest w-full">{t('services_title')}</h1>
                    <span className="small_subtitle lg:w-1/3 text-center text-black">{t('services_subtitle')}</span>
                    <img src= {`/assets/images/servicios/${t('moodboard')}`} alt="servicios1" className="w-full lg:h-[600px] object-contain" />
                </div>
                <div className='stretch_section lg:py-40 py-20 bg-white section_doodle2'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-2'>
                        <div className='lg:w-1/2 lg:flex lg:justify-end'>
                            <h1 className="text_anton tracking-widest lg:w-2/3 lg:m-0 lg:text-start text-center text-black">{t('services_title_2')}</h1>
                        </div>
                        <div className='flex flex-col gap-4 lg:w-1/2 justify-center'>
                            <span className="small_subtitle lg:text-start text-center text-black"><SplitText text={t('services_text_3')} /></span> 
                            <span className="small_subtitle lg:text-start text-center font-semibold text-black">{t('services_text_4')}</span>
                        </div>
                    </div>
                </div>
                <Carousel images={images} text={t('services_section_loadmore')} />
                <div className='lg:px-40 px-8 py-8 lg:py-10 bg-white'>
                    <h1 className="subtitle font-semibold text-center tracking-widest uppercase text-black">{t('services_section_2_title')}</h1>
                </div>
                <div className='grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2'>
                    {
                        gridContent.map((content, index) => (
                            <div key={index} className='flex flex-col gap-4 justify-between relative'>
                                <img src={content.img} alt={`servicios${index}`} className="lg:h-[600px] h-[250px] object-cover brightness-50" />
                                <div className='flex absolute lg:bottom-2 bottom-4 lg:w-[250px] w-4/5 lg:pl-10 pl-4 justify-start items-start lg:h-1/4 h-2/5'>
                                    <span 
                                    className={index % 2 === 0 ? "mont text-white uppercase font-bold lg:text-sm lg:ml-2 ml-2 text-xs lg:leading-6 leading-4 tracking-wider" : "mont text-white uppercase font-light lg:text-sm text-xs lg:mx-2 lg:leading-6 leading-4 tracking-wider"} >
                                        {content.boldText}
                                        <span className={index % 2 === 0 ? "mont text-white uppercase font-light lg:mx-2 lg:ml-2 ml-2 lg:text-sm text-xs lg:leading-6 leading-4 tracking-wider" : "mont text-white uppercase mx-2 font-bold  lg:text-sm text-xs lg:leading-6 leading-4 tracking-wider"}>
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