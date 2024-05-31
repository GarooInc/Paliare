"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoCloseOutline } from "react-icons/io5";



const QuotePopUp = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const { t } = useTranslation()
    const hook = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_QUOTE

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const [popupMessage, setPopupMessage] = useState({ show: false, message: '', success: false });


    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            contacto: form
        }

        try {
            console.log("Sending data to Zapier")
            const response = await fetch(hook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            if (response.ok) {
                setPopupMessage({ show: true, message: t('Cotizador:success_message'), success: true });
                //despues de 5 segundos se cierra el mensaje y el popup
                setTimeout(() => {
                    setPopupMessage({ show: false, message: '', success: false });
                    setShowPopUp(false);
                }, 5000);
            } else {
                setPopupMessage({ show: true, message: t('Cotizador:error_message'), success: false });
            }
        } catch (error) {
            setPopupMessage({ show: true, message: t('Cotizador:error_message'), success: false });
        }
    }


  return (
    <div className='flex flex-col w-full lg:justify-center justify-start items-center'>
    {
        !showPopUp && (
            <button className='link_text pb-10' onClick={() => setShowPopUp(true)}>{t('Cotizador:link_popup')}</button>
        )
    }
    {
        showPopUp && (
            <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
        <form className="py-10 md:py-12 lg:m-0 mx-10 bg-white flex flex-col justify-center items-center lg:w-1/2 w-full relative">
            <IoCloseOutline className="absolute top-4 right-4 text-3xl cursor-pointer text-black" onClick={() => setShowPopUp(false)}/>
            <h1 className="tittle_anton text-center text-black anton py-4">{t('Cotizador:quote_header')}</h1>
            <div className="flex flex-col justify-between items-center gap-2 lg:w-1/2 w-2/3">
                <input type="text" placeholder={t('Cotizador:quote_form_name')} className="input_contactv2" name="name"
                       onChange={(e) => setForm({...form, name: e.target.value})}/>
                <input type="email" placeholder={t('Cotizador:quote_form_email')} className="input_contactv2" name="email"
                       onChange={(e) => setForm({...form, email: e.target.value})}/>
                <input type="text" placeholder={t('Cotizador:quote_form_phone')} className="input_contactv2" name="phone"
                       onChange={(e) => setForm({...form, phone: e.target.value})}/>
                <button className="btn_contact" onClick={handleSubmit}>{t('Cotizador:quote_form_send')}</button>
                {popupMessage.show && (
                <div className={` w-full flex justify-center items-center ${popupMessage.success ? 'bg-green-500' : 'bg-red-500'}`}>
                    <div className="text-white text-center p-5 rounded-lg">
                        {popupMessage.message}
                    </div>
                </div>
            )}
            </div>
        </form>
        
    </div>
        )
    }
    </div>
  )
}

export default QuotePopUp