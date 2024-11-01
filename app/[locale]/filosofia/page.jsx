import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import Footer from '@/components/Footer/Footer'

const namespaces = ['filosofia', 'header']

export const metadata = {
    metadataBase: new URL('https://paliarestudio.com'),
    title: 'Filosofía - Paliare',
    description: 'Descubre la filosofía de Paliare: Crear espacios armónicos a través del trabajo en equipo, donde convergen los sueños del cliente, el talento del equipo y la diligencia profesional.',
    keywords: 'Paliare, arquitectura, diseño, filosofía, trabajo en equipo, armonía, sueños del cliente, diligencia profesional',
    openGraph: {
        title: 'Filosofía - Paliare',
        description: 'En Paliare seguimos la filosofía del trabajo en equipo, logrando la armonía gracias a la dedicación de cada persona que ha dejado su huella en nuestros proyectos.',
        url: 'https://paliarestudio.com/filosofia',
        images: [
            {
                url: '/assets/images/filosofia/filosofia.png', // Cambia a la imagen relevante de la filosofía, si existe
                width: 1200,
                height: 630,
                alt: 'Hormigas trabajando juntas, simbolizando el trabajo en equipo y la unidad.',
            },
        ],
    },
    twitter: {
        title: 'Filosofía - Paliare',
        description: 'Nuestra filosofía es simple: el mejor trabajo es el que se realiza en equipo. Descubre cómo Paliare crea espacios auténticos con armonía y dedicación.',
        card: 'summary_large_image',
        images: ['/assets/images/filosofia/filosofia.png'], // Cambia a la imagen relevante
    },
};

export default async function Filosofia({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar namepage={t('header:menu_philosophy')} transparent={true}/>
        <main className="flex min-h-screen w-full bg-white">
            <div className='flex flex-col w-full'>
                <section className="normal_section pt-24 img_philosophy_background">
                <h1 className="tittle_v4 py-4 text-black">
                    {t('philosophy_title')}
                </h1>
                <span className="subtitle text-center w-4/5 lg:w-2/5 text-black" >{t('philosophy_text_1')}</span>
                <div className="w-full lg:h-[400px] h-[200px]"></div>
                <span className="tittle lg:w-3/4 py-20 text-black">{t('philosophy_text_2')}</span>
                </section>
                <div className='flex flex-col bg-black w-full p-10 lg:p-20 justify-center items-center'>
                    <span className="tittle_lowercase text-white text-center">{t('philosophy_subtitle')}</span>
                    <img src="/assets/images/filosofia/logopatygris.png" alt="hormigas" className="lg:w-60 w-40 object-cover" />
                </div>
                <div className="pt-10 md:py-20">
                        <div className="flex md:flex-row flex-col lg:w-full normal_section justify-center items-center lg:py-10 py-4 gap-4 lg:gap-0">
                            <div className='md:w-1/2 w-full flex md:justify-end justify-center'>
                                <h1 className="hidden lg:flex tittle tracking-widest text-black md:w-1/2 md:text-start text-center">{t('philosophy_section_2_text_1')}</h1>
                                <h1 className="lg:hidden tittle md:text-start md:mx-0 md:px-0 px-10 md:w-2/3 text-black font-semibold uppercase">{t('philosophy_section_2_text_1')}</h1>
                            </div>
                            <div className="flex flex-col md:w-1/2 w-full lg:pl-2 text-4xl lg:justify-start justify-center">
                                <span className="small_subtitle lg:w-3/4 lg:text-start text-center md:text-start text-black">{t('philosophy_section_2_text_2')}</span>
                                <ul className="lg:w-2/3 lg:pl-4 pt-4 pl-12">
                                    <li className="list-disc small_subtitle text-black font-semibold">{t('philosophy_section_2_text_2_1')}</li>
                                    <li className="list-disc small_subtitle text-black font-semibold">{t('philosophy_section_2_text_2_2')}</li>
                                    <li className="list-disc small_subtitle text-black font-semibold">{t('philosophy_section_2_text_2_3')}</li>
                                </ul>
                            </div>
                        </div>
                    <img src="/assets/images/filosofia/filosofia.png" alt="hormigas" className="z-10 w-full md:h-[480px] lg:h-[680px] h-[180px] lg:object-contain object-cover lg:my-0 my-8" />
                    <div className='normal_section'>
                        <span className="subtitle lg:w-1/2 tracking-wider lg:pl-10 text-center pt-10 italic text-black">{t('philosophy_section_2_text_3')}</span>
                        <a href='/servicios' className="cursor-pointer subtitle mont font-bold lg:w-1/2 lg:py-20 py-10 text-center text-black">{t('philosophy_section_2_text_4')}</a>
                    </div>
                </div>
            </div>
            <LanguageSwitcher />
        </main>
        <Footer />
        </TranslationsProvider>
    )
}