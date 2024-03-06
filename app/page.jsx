'use client'
import React, { useState, useEffect } from 'react'
import { textsEN } from '../public/locales/en'
import { textsES } from '../public/locales/es'

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

    console.log(language)
    
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between bg-black">
            <h1 className="text-blue-500">{textos.title}</h1>
            <button onClick={() => changeLanguage('es')} className='bg-white p-4'>ES</button>
            <button onClick={() => changeLanguage('en')} className='bg-white p-4'>EN</button>
        </main>
    )
}