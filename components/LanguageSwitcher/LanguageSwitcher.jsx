"use client"
import React, { useState, useEffect } from 'react'
import { textsEN } from '@/public/locales/en'
import { textsES } from '@/public/locales/es'

const LanguageSwitcher = () => {
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
    console.log(language)

    return (
        <div className='fixed bottom-0 right-0 p-4'>
            {
                language === 'en' ? 
                <button onClick={() => changeLanguage('es')} className='bg-white p-4'>ES</button> :
                <button onClick={() => changeLanguage('en')} className='bg-white p-4'>EN</button>
            }
        </div>
    )
}

export default LanguageSwitcher