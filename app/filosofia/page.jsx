'use client'
import React, { useState, useEffect } from 'react'
import { textsEN } from '@/public/locales/en'
import { textsES } from '@/public/locales/es'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'


const FilosofiaPage = () => {
    const [language, setLanguage] = useState('')

    const textos = language === 'en' ? textsEN : textsES
    
    useEffect(() => {
        const lang = localStorage.getItem('language')
        if (lang) setLanguage(lang)
    }, [])

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

  return (
    <div>
        <h1 className='text-black'>{textos.menu_philosophy}</h1>
        <LanguageSwitcher onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')} />
    </div>

  )
}

export default FilosofiaPage