import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'

const namespaces = ['Servicios', 'header']

export default async function Servicios({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <section className="flex min-h-screen w-full flex-col lg:pt-20 bg-lightergray">
                <NavBar transparent black/>
                <div className="normal_section pt-28  gap-2 ">
                    <h1 className="tittle_anton text-center text-black">{t('services_title')}</h1>
                    <span className="subtitle_mid lg:w-1/3 text-center text-black">{t('services_subtitle')}</span>
                    
                </div>
                <div className='normal_section py-20 bg-white'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <h1 className="tittle_anton lg:text-start text-center text-black">{t('services_title_2')}</h1>
                        <div className='flex flex-col gap-4 lg:w-2/3'>
                            <span className="subtitle_mid lg:text-start text-center text-black">{t('services_text_3')}</span>
                            <span className="subtitle_mid lg:text-start text-center font-bold text-black">{t('services_text_4')}</span>
                        </div>
                    </div>
                </div>
                <div className='normal_section py-20 bg-black'>
                    <div className='flex lg:flex-row flex-col-reverse  justify-center items-start gap-8'>
                        <img src="/assets/images/servicios/4.jpg" alt="servicios1" className="w-full lg:h-[500px] h-[200px] object-cover" />
                        <div className='flex lg:flex-col flex-row-reverse lg:gap-8 gap-2 w-full lg:w-2/3'>
                            <div className='flex flex-col gap-2'>
                                <h1 className="tittle_anton text-white m-0">{t('services_service_1_title')}</h1>
                                <a href="/proyectos" className="subtitle_mid font-bold text-white underline">{t('services_service_proyects')}</a>
                            </div>
                            <img src="/assets/images/servicios/7.jpg" alt="servicios2" className="w-full lg:h-[400px] h-[100px] object-cover" />
                        </div>
                    </div>
                </div>
                <div className='normal_section py-20 bg-white'>
                    <div className='flex lg:flex-row flex-row-reverse justify-center items-end lg:gap-8 gap-4'>
                        <img src="/assets/images/servicios/3.jpg" alt="servicios3" className="w-1/2 lg:h-[500px] h-[300px] object-cover" />
                        <div className='flex flex-col lg:gap-8 gap-4 lg:w-2/3'>
                            <div className='flex flex-col gap-2'>
                                <h1 className="tittle_anton text-black m-0">{t('services_service_2_title')}</h1>
                                <a href="/proyectos" className="subtitle_mid font-bold text-black underline">{t('services_service_proyects')}</a>
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
                                <a href="/proyectos" className="subtitle_mid font-bold text-black underline">{t('services_service_proyects')}</a>
                            </div>
                            <img src="/assets/images/servicios/8.jpg" alt="servicios6" className="w-full lg:h-[400px] h-[200px] object-cover" />
                        </div>
                    </div>
                </div>
                <div className='normal_section py-10 bg-white'>
                    <h1 className="subtitle text-center text-black">{t('services_section_2_title')}</h1>
                </div>
                
            </section>
            <LanguageSwitcher />
        </TranslationsProvider>
    )
}