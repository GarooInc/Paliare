import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ImageBanner from '@/components/ImageBanner/ImageBanner'
import QuotePopUp from '@/components/QuotePopUp/QuotePopUp'


const namespaces = ['Construccion', 'header', 'Cotizador']

export default async function Construccion({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar transparent />
        <div className='flex flex-col w-full bg-white'>
            <ImageBanner image="/assets/images/construccion/portada.jpg" right navRight="/proyectos" left navLeft="/proyectos" logo="/assets/images/construccion/Terrare.png" />
            <div className="flex w-full bg-white flex-col normal_section">
                <span className="lg:w-2/3 subtitle_mid text-black text-center pt-10">{t('construction_text1')}</span>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 py-10">
                    <img src="/assets/images/construccion/1.jpg" alt="construccion1" className="w-full lg:h-[400px] h-[300px] object-cover" loading='lazy' />
                    <img src="/assets/images/construccion/2.png" alt="construccion2" className="w-full lg:h-[400px] h-[300px] object-cover" loading='lazy' />
                    <img src="/assets/images/construccion/3.jpg" alt="construccion3" className="w-full lg:h-[400px] h-[200px] object-cover" loading='lazy' />
                    <img src="/assets/images/construccion/4.png" alt="construccion4" className="w-full lg:h-[400px] h-[200px] object-cover" loading='lazy' />
                </div>
                <QuotePopUp />
            </div>
            <LanguageSwitcher />
        </div>
        <Footer />
        </TranslationsProvider>
    )
}
