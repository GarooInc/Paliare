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

    console.log("hook", hook)
    console.log("form", form)


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
            console.log('Success:', response)
        } catch (error) {
            console.error('Error:', error)
        }
    }



    return (
        <div className='flex flex-col w-full lg:justify-center justify-start items-center'>
            <form className="py-20 bg-black flex flex-col justify-center items-center lg:w-1/2 w-full">
                <h1 className="tittle text-center text-white anton py-4">{t('contact_title')}</h1>
                <div className="flex flex-col justify-between items-center gap-2 lg:w-1/2 w-2/3">
                    <input type="text" placeholder={t('contact_form_name')} className="input_contact" name="name"
                           onChange={(e) => setForm({...form, name: e.target.value})}/>
                    <input type="email" placeholder={t('contact_form_email')} className="input_contact" name="email"
                           onChange={(e) => setForm({...form, email: e.target.value})}/>
                    <input type="text" placeholder={t('contact_form_phone')} className="input_contact" name="phone"
                           onChange={(e) => setForm({...form, phone: e.target.value})}/>
                    <input type="text" placeholder={t('contact_form_service')} className="input_contact" name="service"
                           onChange={(e) => setForm({...form, service: e.target.value})}/>
                    <textarea className=" input_contact" placeholder={t('contact_form_message')} name="message"
                              onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
                    <button
                        className="text-white mont btn border-2 border-white w-full mt-10 hover:bg-white hover:text-black rounded-none"
                        onClick={handleSubmit}>{t('contact_form_send')}</button>
                </div>
            </form>
            <div className="flex flex-col w-full py-10 gap-4 normal_section">
                <span className="subtitle_mid text-center text-black">{t('contact_subtitle_1')}</span>
                <span
                    className="text-2xl mont text-center font-semibold text-black uppercase">{t('contact_subtitle_2')}</span>
            </div>
        </div>
    )
}

export default Form