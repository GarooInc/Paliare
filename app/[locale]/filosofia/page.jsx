import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'

const namespaces = ['filosofia', 'header']
export default async function Filosofia({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar/>
        <main className="flex min-h-screen w-full pt-20">
            <section className="normal_section">
              <h1 className="text-4xl font-montserrat font-light">{t('philosophy_title')}</h1>
              <span className="subtitle">{t('philosophy_text_1')}</span>
            </section>
            <LanguageSwitcher />
        </main>
        </TranslationsProvider>
    )
}