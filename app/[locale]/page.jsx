import React from 'react'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'

const namespaces = ['homepage', 'header']
export default async function Home({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar primary/>
        <main className="flex min-h-screen w-full flex-col pt-20">
            <section className="normal_section h-screen section_img_background gap-2">
                <div className='h-40'>
                    <img
                        className="h-40 w-auto lg:block xs:hidden"
                        src="/assets/images/paliarenegro.png"
                        alt=""
                    />
                </div>
                <h1 className="tittle">{t('homepage_title')}</h1>
                <span className="subtitle lg:w-1/4">{t('homepage_subtitle')}</span>
                <a href="/filosofia" className="text-md border-b-2 border-black font-montserrat">{t('homepage_kwowmore')}</a>
            </section>
            <section className="normal_section">
                <h1 className="text-4xl font-montserrat flex gap-2">
                    <span className='font-bold'>{t('homepage_section_1_title_1')}</span>
                    <span className='font-light'>{t('homepage_section_1_title_1_1')}</span>
                </h1>
            </section>
            <LanguageSwitcher />
        </main>
        </TranslationsProvider>
    )
}