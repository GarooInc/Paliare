import React from 'react'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import ImageBanner from '@/components/ImageBanner/ImageBanner'

const namespaces = ['arquitectura', 'header']

export default async function Proyectos({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
        <NavBar transparent />
        <div className='flex flex-col w-full bg-white'>
            <ImageBanner image="/assets/images/arquitectura/portada.jpg" right navRight="/interiorismo" text={t('design_title')} />
            <div className="flex w-full bg-white flex-col normal_section">
                <span className="lg:w-2/3 subtitle_mid text-black text-center pt-10">{t('design_text1')}</span>
                <div className="gridFlex">
                    <img src="/assets/images/arquitectura/2.jpg" alt="arquitectura1" className="w-full lg:h-[500px] h-[300px] object-cover" loading='lazy'/>
                    <div className="flex flex-row gap-4">
                        <div className='flex flex-col gap-4 justify-between'>
                            <img src="/assets/images/arquitectura/3.jpg" alt="arquitectura2" className=" lg:h-[300px] h-[150px] object-cover" loading='lazy'/>
                            <img src="/assets/images/arquitectura/4.jpg" alt="arquitectura3" className="lg:h-[300px] h-[150px] object-cover" loading='lazy'/>
                        </div>
                        <img src="/assets/images/arquitectura/1.jpg" alt="arquitectura4" className="w-1/2 lg:h-[620px] h-[320px] object-cover" loading='lazy'/>
                    </div>
                </div>
            </div>
            <LanguageSwitcher />
        </div>
        <Footer />
        </TranslationsProvider>
    )
}
