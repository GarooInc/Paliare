'use client'
import React, { useState, useEffect } from 'react'
import { textsEN } from '@/public/locales/en'
import { textsES } from '@/public/locales/es'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'


export default function Home() {
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
        <main className="flex min-h-screen w-full pt-20">
            <h1 className="text-4xl font-bold">{textos.title}</h1>
            <LanguageSwitcher onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')} />
        </main>
    )
}