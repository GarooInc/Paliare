import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'

const namespaces = ['Servicios', 'header']

export default async function Servicios({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    const gridContent = [
        {
            img: '/assets/images/servicios/2.jpg',
            boldText : t('services_section_2_text_1'),
            text: t('services_section_2_text_1_1')
        },
        {
            img: '/assets/images/servicios/11.jpg',
            boldText : t('services_section_2_text_2'),
            text: t('services_section_2_text_2_1')
        },
        {
            img: '/assets/images/servicios/12.jpg',
            boldText : t('services_section_2_text_3'),
            text: t('services_section_2_text_3_1')
        },
        {
            img: '/assets/images/servicios/6.jpg',
            boldText : t('services_section_2_text_4'),
            text: t('services_section_2_text_4_1')
        }
    ]

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <section className="flex min-h-screen w-full flex-col lg:pt-20 bg-lightergray">
                <NavBar transparent black/>
                <div className="normal_section py-28  gap-2 ">
                    <h1 className="tittle_anton text-center text-black">{t('services_title')}</h1>
                    <span className="subtitle_mid lg:w-1/3 text-center text-black">{t('services_subtitle')}</span>
                    <img src="/assets/images/servicios/collagemoodboard.png" alt="servicios1" className="w-full lg:h-[600px] object-contain" />
                </div>
                <div className='normal_section lg:py-60 py-40 bg-white'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <h1 className="tittle_anton lg:text-start text-center text-black">{t('services_title_2')}</h1>
                        <div className='flex flex-col gap-4 lg:w-2/3'>
                            <span className="subtitle_mid lg:text-start text-center text-black">{t('services_text_3')}</span>
                            <span className="subtitle_mid lg:text-start text-center font-medium text-black">{t('services_text_4')}</span>
                        </div>
                    </div>
                </div>
                <div className='normal_section py-20 bg-black'>
                    <div className='flex lg:flex-row flex-col-reverse  justify-center items-start gap-8'>
                        <img src="/assets/images/servicios/4.jpg" alt="servicios1" className="w-full lg:h-[500px] h-[200px] object-cover" />
                        <div className='flex lg:flex-col flex-row-reverse lg:gap-8 gap-2 w-full lg:w-2/3'>
                            <div className='flex flex-col gap-2'>
                                <h1 className="tittle_anton text-white m-0">{t('services_service_1_title')}</h1>
                                <a href="/proyectos" className="subtitle_mid font-medium text-white underline">{t('services_service_proyects')}</a>
                            </div>
                            <img src="/assets/images/servicios/7.jpg" alt="servicios2" className="w-full lg:h-[400px] h-[100px] object-cover" />
                        </div>
                    </div>
                </div>
                <div className='normal_section py-20 bg-white section_doodle'>
                    <div className='flex lg:flex-row flex-row-reverse justify-center items-end lg:gap-8 gap-4'>
                        <img src="/assets/images/servicios/3.jpg" alt="servicios3" className="w-1/2 lg:h-[500px] h-[300px] object-cover" />
                        <div className='flex flex-col lg:gap-8 gap-4 lg:w-2/3'>
                            <div className='flex flex-col gap-2'>
                                <h1 className="tittle_anton text-black m-0">{t('services_service_2_title')}</h1>
                                <a href="/proyectos" className="subtitle_mid font-medium text-black underline">{t('services_service_proyects')}</a>
                            </div>
                            <img src="/assets/images/servicios/10.jpg" alt="servicios4" className=" lg:h-[400px] h-[200px] object-cover" />
                        </div>
                    </div>
                </div>
                <div className='normal_section py-20 bg-lightergray'>
                    <div className='flex lg:flex-row flex-col justify-center items-start gap-8'>
                        <img src="/assets/images/servicios/5.jpg" alt="servicios5" className="w-full lg:h-[500px] h-[200px] object-cover" />
                        <div className='flex lg:flex-col flex-row lg:gap-8 gap-4 w-full lg:w-2/3'>
                            <div className='flex flex-col gap-2'>
                                <h1 className="tittle_anton text-black m-0">{t('services_service_3_title')}</h1>
                                <a href="/proyectos" className="subtitle_mid font-medium text-black underline">{t('services_service_proyects')}</a>
                            </div>
                            <img src="/assets/images/servicios/8.jpg" alt="servicios6" className="w-full lg:h-[400px] h-[200px] object-cover" />
                        </div>
                    </div>
                </div>
                <div className='normal_section py-4 bg-white'>
                    <h1 className="subtitle font-medium text-center text-black">{t('services_section_2_title')}</h1>
                </div>
                <div className='grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2'>
                    {
                        gridContent.map((content, index) => (
                            <div key={index} className='flex flex-col gap-4 justify-between relative'>
                                <img src={content.img} alt={`servicios${index}`} className="lg:h-[600px] h-[300px] object-cover brightness-50" />
                                <div className='flex absolute lg:bottom-2 bottom-8 p-2 lg:w-4/5 justify-start items-start h-1/4'>
                                    <span 
                                    className={index % 2 === 0 ? "mont text-white uppercase font-bold lg:text-lg text-sm" : "mont text-white uppercase font-light lg:text-lg text-sm"} >
                                        {content.boldText}
                                        <span className={index % 2 === 0 ? "mont text-white uppercase font-light mx-2 lg:text-lg text-sm" : "mont text-white uppercase font-bold mx-2 lg:text-lg text-sm"}>
                                            {content.text}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='normal_section py-20 bg-white'>
                    <h1 className="tittle_v2 font-bold text-black">{t('services_process_header')}</h1>
                </div>
                
            </section>
            <LanguageSwitcher />
        </TranslationsProvider>
    )
}