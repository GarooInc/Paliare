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
        <NavBar namepage={t('header:menu_contact')}/>
        <div className="flex min-h-screen w-full lg:py-32 py-0 section_doodles  bg-white">
            <Form />
            <LanguageSwitcher />
        </div>
        <Footer />
        </TranslationsProvider>
    )
}
