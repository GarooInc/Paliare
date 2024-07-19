'use client'
import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'

const Form = () => {
    const hook = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK
    const { t } = useTranslation()

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const [popupMessage, setPopupMessage] = useState({ show: false, message: '', success: false });


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Handle Submit")
        console.log(form)

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
                setPopupMessage({ show: true, message: t('contact_success_message'), success: true });
                setTimeout(() => {
                    setPopupMessage({ show: false, message: '', success: false });
                }, 10000);
            } else {
                setPopupMessage({ show: true, message: t('contact_error_message'), success: false });
            }
        } catch (error) {
            setPopupMessage({ show: true, message: t('contact_error_message'), success: false });
        }
    }



    return (
        <div className='flex flex-col w-full lg:justify-center justify-start items-center'>
            <form className="py-20 bg-black flex flex-col justify-center items-center lg:w-1/2 w-full">
                <h1 className="tittle text-center text-white anton py-4">{t('contact_title')}</h1>
                <div className="flex flex-col justify-between items-center gap-2 lg:w-1/2 w-2/3">
                    <input type="text" placeholder={t('contact_form_name')} className="input_contact tracking-wider" name="name"
                           onChange={(e) => setForm({...form, name: e.target.value})}/>
                    <input type="email" placeholder={t('contact_form_email')} className="input_contact tracking-wider" name="email"
                           onChange={(e) => setForm({...form, email: e.target.value})}/>
                    <input type="text" placeholder={t('contact_form_phone')} className="input_contact tracking-wider" name="phone"
                           onChange={(e) => setForm({...form, phone: e.target.value})}/>
                    <input type="text" placeholder={t('contact_form_service')} className="input_contact tracking-wider" name="service"
                           onChange={(e) => setForm({...form, service: e.target.value})}/>
                    <textarea className="input_contact p-20 flex justify-start" placeholder={t('contact_form_message')} name="message"
                              onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
                    <div className="flex justify-start items-start w-full">
                    <button className="btn_contact_v2 tracking-wider" onClick={handleSubmit}>{t('contact_form_send')}</button>
                    </div>
                    {
                        popupMessage.show && (
                            <div
                                className={`flex justify-center items-center w-full h-12 ${popupMessage.success ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                                <span>{popupMessage.message}</span>
                            </div>
                        )
                    }
                </div>
            </form>
            <div className="flex flex-col w-full py-10 gap-4 normal_section">
                <span className="subtitle_mid text-center text-black">{t('contact_subtitle_1')}</span>
                <span className="lg:text-2xl text-lg mont text-center font-semibold text-black uppercase tracking-wider">{t('contact_subtitle_2')}</span>
            </div>
        </div>
    )
}

export default Form