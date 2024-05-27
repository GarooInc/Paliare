import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ArrowBack from '@/components/ArrowBack/ArrowBack'
import Footer from '@/components/Footer/Footer'

const namespaces = ['filosofia', 'header']
export default async function Filosofia({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar/>
        <main className="flex min-h-screen w-full bg-white">
            <div className='flex flex-col w-full'>
                <ArrowBack />
                <section className="normal_section pt-10">
                <h1 className="tittle_v4 py-4 text-black">
                    {t('philosophy_title')}
                </h1>
                <span className="subtitle_mid text-center w-4/5 lg:w-2/5 text-black" >{t('philosophy_text_1')}</span>
                <img src="/assets/images/filosofia/fotoequipoejemplo.jpeg" alt="fotoequipoejemplo" className="w-full lg:h-[700px] object-cover" />
                <span className="tittle lg:w-3/4 py-20 text-black">{t('philosophy_text_2')}</span>
                </section>
                <div className='flex flex-col bg-black w-full p-10 lg:p-20 justify-center items-center'>
                    <span className="tittle_lowercase text-white text-center">{t('philosophy_subtitle')}</span>
                    <img src="/assets/images/filosofia/logopatygris.png" alt="hormigas" className="lg:w-60 w-40 object-cover" />
                </div>
                <div className="pt-10">
                        <div className="flex md:flex-row flex-col lg:w-full normal_section justify-center items-center">
                            <div className='md:w-1/2 flex justify-end'>
                                <h1 className="tittle_anton tracking-widest text-black md:w-1/2 md:text-start text-center">{t('philosophy_section_2_text_1')}</h1>
                            </div>
                            <div className="flex flex-col md:w-1/2 lg:pl-4 text-4xl md:pt-48">
                                <span className="subtitle_mid w-3/4 lg:text-start text-black">{t('philosophy_section_2_text_2')}</span>
                                <ul className="lg:w-2/3 lg:pl-10 pl-4 pt-4 ">
                                    <li className="list-disc subtitle_mid text-black font-semibold">{t('philosophy_section_2_text_2_1')}</li>
                                    <li className="list-disc subtitle_mid text-black font-semibold">{t('philosophy_section_2_text_2_2')}</li>
                                    <li className="list-disc subtitle_mid text-black font-semibold">{t('philosophy_section_2_text_2_3')}</li>
                                </ul>
                            </div>
                        </div>
                    <img src="/assets/images/filosofia/filosofia.png" alt="hormigas" className="z-10 w-full md:h-[680px] object-cover py-10" />
                    <div className='normal_section'>
                        <span className="subtitle_mid lg:w-1/2 tracking-wider lg:pl-10 text-center pt-10 italic text-black">{t('philosophy_section_2_text_3')}</span>
                        <span className="subtitle_mid mont font-bold lg:w-1/2 py-20 text-center text-black">{t('philosophy_section_2_text_4')}</span>
                    </div>
                </div>

            </div>
            <LanguageSwitcher />
        </main>
        <Footer />
        </TranslationsProvider>
    )
}