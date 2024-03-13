import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Footer from '@/components/Footer/Footer'

const namespaces = ['Contacto', 'header']

export default async function Contacto({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar/>
        <main className="flex min-h-screen w-full pt-28 bg-white">
            <div className='flex flex-col w-full lg:justify-center justify-start items-center'>
                <form className="py-20 bg-black flex flex-col justify-center items-center lg:w-1/2 w-full">
                    <h1 className="tittle text-center text-white anton py-4">{t('contact_title')}</h1>
                    <div className="flex flex-col justify-between items-center gap-2 lg:w-1/2 w-2/3">
                        <input type="text" placeholder={t('contact_form_name')} className="input_contact" />
                        <input type="email" placeholder={t('contact_form_email')} className="input_contact" />
                        <input type="text" placeholder={t('contact_form_phone')} className="input_contact" />
                        <input type="text" placeholder={t('contact_form_service')} className="input_contact" />
                        <textarea className="textarea input_contact" placeholder={t('contact_form_message')}></textarea>
                        <button className="text-white mont btn border-2 border-white w-full mt-10 hover:bg-white hover:text-black">{t('contact_form_send')}</button>
                    </div>
                </form>
                <div className="flex flex-col w-full py-10 gap-4 normal_section">
                    <span className="subtitle_mid text-center text-black">{t('contact_subtitle_1')}</span>
                    <span className="text-2xl mont text-center font-semibold text-black uppercase">{t('contact_subtitle_2')}</span>
                </div>
            </div>
            <LanguageSwitcher />
        </main>
        <Footer />
        </TranslationsProvider>
    )
}
