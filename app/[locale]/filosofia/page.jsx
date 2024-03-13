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
        <main className="flex min-h-screen w-full pt-28 bg-white">
            <div className='flex flex-col w-full'>
                <ArrowBack />
                <section className="normal_section pt-10">
                <h1 className="tittle_v2 py-4 text-black">
                    {t('philosophy_title')}
                </h1>
                <span className="subtitle_mid text-center lg:w-1/2 text-black" >{t('philosophy_text_1')}</span>
                <img src="/assets/images/filosofia/fotoequipoejemplo.jpeg" alt="fotoequipoejemplo" className="w-full lg:h-[700px] object-cover" />
                <span className="tittle lg:w-1/2 py-20 text-black">{t('philosophy_text_2')}</span>
                </section>
                <div className='flex flex-col bg-black w-full p-10 justify-center items-center'>
                    <span className="text-white text-center text-2xl anton font-light">{t('philosophy_subtitle')}</span>
                    <img src="/assets/images/filosofia/logopatygris.png" alt="hormigas" className="w-40 object-cover" />
                </div>
                <div className="normal_section pt-10">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center relative">
                        <h1 className="tittle_v2 text-black">{t('philosophy_section_2_text_1')}</h1>
                        <div className="lg:hidden xs:flex flex-col justify-center items-center">
                            <span className="subtitle_mid text-justify pt-10 text-black">{t('philosophy_section_2_text_2')}</span>
                            <ul className="pl-6 pt-6">
                                <li className="liststyle">{t('philosophy_section_2_text_2_1')}</li>
                                <li className="liststyle">{t('philosophy_section_2_text_2_2')}</li>
                                <li className="liststyle">{t('philosophy_section_2_text_2_3')}</li>
                            </ul>
                        </div>
                        <img src="/assets/images/filosofia/filosofia4.png" alt="hormigas" className="z-10 w-[400px] object-cover py-10" />
                        <div className="lg:inset-96 lg:mt-40 bg-gray-500 lg:absolute h-[1px] z-0 xs:w-full lg:w-auto"></div>
                        <div className="xs:hidden lg:flex flex-col lg:w-1/2">
                            <span className="subtitle_mid lg:text-start text-black">{t('philosophy_section_2_text_2')}</span>
                            <ul className="lg:w-2/3 lg:pl-10 pt-10">
                                <li className="liststyle">{t('philosophy_section_2_text_2_1')}</li>
                                <li className="liststyle">{t('philosophy_section_2_text_2_2')}</li>
                                <li className="liststyle">{t('philosophy_section_2_text_2_3')}</li>
                            </ul>
                        </div>
                    </div>
                    <span className="subtitle_mid lg:w-1/2 lg:pl-10 text-center pt-10 italic text-black">{t('philosophy_section_2_text_3')}</span>
                    <span className="subtitle_mid mont font-bold lg:w-1/2 py-20 text-center text-black">{t('philosophy_section_2_text_4')}</span>
                </div>

            </div>
            <LanguageSwitcher />
        </main>
        <Footer />
        </TranslationsProvider>
    )
}