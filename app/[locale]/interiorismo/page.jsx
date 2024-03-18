import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ImageBanner from '@/components/ImageBanner/ImageBanner'


const namespaces = ['Interiorismo', 'header', 'Cotizador']

export default async function Interiorismo({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar transparent />
        <div className='flex flex-col w-full bg-white'>
            <ImageBanner image="/assets/images/interiorismo/portada.jpg" right navRight="/construccion" left navLeft="/proyectos" text={t('interiorism_title')} />
            <div className="flex w-full bg-white flex-col normal_section">
                <span className="lg:w-2/3 subtitle_mid text-black text-center pt-10">{t('interiorism_text1')}</span>
                <div className="gridFlex">
                    <div className="flex flex-row gap-2">
                        <img src="/assets/images/interiorismo/1.jpg" alt="interiorismo1" className="w-1/2 lg:h-[300px] h-[200px] object-cover" loading='lazy'/>
                        <img src="/assets/images/interiorismo/2.jpg" alt="interiorismo2" className="w-1/2 lg:h-[300px] h-[200px] object-cover" loading='lazy'/>
                    </div>
                    <img src="/assets/images/interiorismo/3.jpg" alt="arquitectura1" className="w-full lg:h-[500px] h-[300px] object-cover" loading='lazy'/>
                    <div className="flex flex-row gap-2">
                        <img src="/assets/images/interiorismo/4.jpg" alt="interiorismo3" className="w-1/2 lg:h-[300px] h-[200px] object-cover" loading='lazy'/>
                        <img src="/assets/images/interiorismo/5.jpg" alt="interiorismo4" className="w-1/2 lg:h-[300px] h-[200px] object-cover" loading='lazy'/>
                    </div>
                </div>
                <button className='link_text pb-10'>{t('Cotizador:link_popup')}</button>
            </div>
            <LanguageSwitcher />
        </div>
        <Footer />
        </TranslationsProvider>
    )
}
