'use client'
import React, {useState, useEffect, useRef} from 'react'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'

const Form = () => {
    const hook = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK
    const { t } = useTranslation()
    const recaptchaRef = useRef(null)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const [popupMessage, setPopupMessage] = useState({ show: false, message: '', success: false });
    const [captchaToken, setCaptchaToken] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Handle Submit")

        const emptyFields = [];
        if (!form.name) emptyFields.push(t('contact_form_name'));
        if (!form.email) emptyFields.push(t('contact_form_email'));
        if (!form.phone) emptyFields.push(t('contact_form_phone'));
        if (!form.service) emptyFields.push(t('contact_form_service'));

        if (emptyFields.length > 0) {
            const fieldsList = emptyFields.join(', ');
            setPopupMessage({ show: true, message: `Please fill in the following fields: ${fieldsList}`, success: false });
            setTimeout(() => {
                setPopupMessage({ show: false, message: '', success: false });
            }, 5000);
            return;
        }

        if (!captchaToken) {
            setPopupMessage({ show: true, message: 'Por favor completa el CAPTCHA', success: false });
            setTimeout(() => {
                setPopupMessage({ show: false, message: '', success: false });
            }, 5000);
            return;
        }

        const data = {
            contacto: form
        }

        try {
            const response = await fetch(hook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            if (response.ok) {
                setPopupMessage({ show: true, message: t('contact_success_message'), success: true });
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
                setCaptchaToken(null);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
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

    const onCaptchaChange = (token) => {
        setCaptchaToken(token);
    }



    return (
        <div className='flex flex-col w-full lg:justify-center justify-start items-center'>
            <form className="py-20 bg-black flex flex-col justify-center items-center lg:w-1/2 w-full">
                <h1 className="tittle text-center text-white anton py-4">{t('contact_title')}</h1>
                <div className="flex flex-col justify-between items-center gap-2 lg:w-1/2 w-2/3">
                    <input type="text" placeholder={t('contact_form_name')} className="input_contact tracking-wider" name="name"
                           onChange={(e) => setForm({...form, name: e.target.value})}
                           value={form.name}/>
                    <input type="email" placeholder={t('contact_form_email')} className="input_contact tracking-wider" name="email"
                           onChange={(e) => setForm({...form, email: e.target.value})}
                           value={form.email}/>
                    <input type="text" placeholder={t('contact_form_phone')} className="input_contact tracking-wider" name="phone"
                           onChange={(e) => setForm({...form, phone: e.target.value})}
                           value={form.phone}/>
                    <input type="text" placeholder={t('contact_form_service')} className="input_contact tracking-wider" name="service"
                           onChange={(e) => setForm({...form, service: e.target.value})}
                           value={form.service}/>
                    <textarea className="input_contact p-20 flex justify-start" placeholder={t('contact_form_message')} name="message"
                              onChange={(e) => setForm({...form, message: e.target.value})}
                              value={form.message}></textarea>
                    
                    <div className="flex justify-center items-center w-full py-4">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onCaptchaChange}
                            theme="light"
                        />
                    </div>

                    <div className="flex justify-start items-start w-full">
                    <button className="btn_contact_v2 tracking-wider" onClick={handleSubmit}>{t('contact_form_send')}</button>
                    </div>
                    {
                        popupMessage.show && (
                            <div
                                className={`flex justify-center items-center w-full px-6 py-4 rounded-lg shadow-lg mont tracking-wider ${
                                    popupMessage.success 
                                        ? 'bg-green-50 border-2 border-green-500 text-green-800' 
                                        : 'bg-red-50 border-2 border-red-500 text-red-800'
                                }`}>
                                <div className="flex items-center gap-3">
                                    {popupMessage.success ? (
                                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    )}
                                    <span className="font-medium text-sm">{popupMessage.message}</span>
                                </div>
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