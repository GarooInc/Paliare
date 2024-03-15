import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Footer from '@/components/Footer/Footer'
import Form from '@/components/Form/Form'

const namespaces = ['Contacto', 'header']

export default async function Contacto({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar/>
        <main className="flex min-h-screen w-full pt-28 bg-white">
            <Form />
            <LanguageSwitcher />
        </main>
        <Footer />
        </TranslationsProvider>
    )
}
