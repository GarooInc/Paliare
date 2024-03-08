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
        <main className="flex min-h-screen w-full pt-20">
            <h1 className="text-4xl font-bold">{t('homepage_title')}</h1>
            <span className="text-2xl">{t('homepage_subtitle')}</span>
            <LanguageSwitcher />
        </main>
        </TranslationsProvider>
    )
}