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
        <NavBar namepage={"contacto"}/>
        <div className="flex min-h-screen w-full lg:py-32 py-20 section_doodles">
            <Form />
            <LanguageSwitcher />
        </div>
        <Footer />
        </TranslationsProvider>
    )
}
