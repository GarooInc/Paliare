"use client"
import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'


const Timeline = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
    
            let index;
            const thresholds = window.innerWidth < 768 ? [2850, 3100] : [4700, 5100];
    
            if (scrollPosition < thresholds[0]) {
                index = 0;
            } else if (scrollPosition >= thresholds[0] && scrollPosition < thresholds[1]) {
                index = 1;
            } else if (scrollPosition >= thresholds[1]){
                index = 2;
            }
        
            console.log("Scroll position:", scrollPosition, "Index:", index);
            setActiveIndex(index);
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    

    function SplitText({ text }) {
        const [firstPart, secondPart] = text.split('.');
        return (
            <>
                {firstPart}.
                <br />
                <br />
                {secondPart}
            </>
        );
    }

  return (
    <div className='lg:px-40 px-4 py-10 bg-white'>
        <h1 className="tittle_v2 font-bold text-black py-10 tracking-widest">{t('services_process_header')}</h1>
        <ul className="timeline timeline-vertical">
        <li>
        <hr className="bg-black"/>
            <div className="self-start">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                {activeIndex >= 0 ? (
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 0.499999C25.3366 0.499999 32.5 7.66344 32.5 16.5C32.5 25.3366 25.3366 32.5 16.5 32.5C7.66344 32.5 0.5 25.3366 0.499999 16.5C0.499999 7.66344 7.66344 0.5 16.5 0.499999ZM16 7.5C20.6693 7.5 24.5 11.5036 24.5 16.5C24.5 21.4964 20.6693 25.5 16 25.5C11.3307 25.5 7.5 21.4964 7.5 16.5C7.5 11.5036 11.3307 7.5 16 7.5ZM25.5 16.5C25.5 11.003 21.2718 6.5 16 6.5C10.7282 6.5 6.5 11.003 6.5 16.5C6.5 21.997 10.7282 26.5 16 26.5C21.2718 26.5 25.5 21.997 25.5 16.5Z" fill="white" stroke="black"/>
                    <ellipse cx="16" cy="16.5" rx="9.5" ry="9" transform="rotate(-90 16 16.5)" fill="black"/>
                    </svg>
                ) : (
                    <circle cx="16.5" cy="16.5" r="16" transform="rotate(-90 16.5 16.5)" fill="white" stroke="black" />
                )}
            </svg>
            </div>
            <div className="timeline-start lg:pr-10 pr-4">
                <img src="/assets/images/servicios/1.jpg" alt="servicios7" className="lg:w-[400px] lg:h-[400px] h-[200px] object-cover" />
            </div>
            <div className="timeline-end flex flex-col justify-start items-start md:pl-10 pl-6 gap-4">
                <h1 className="anton text-xl lg:text-3xl text-black uppercase tracking-widest">{t('services_process_title_1')}</h1>
                <span className="subtitle_mid text-black text-start"><SplitText text={t('services_process_text_1')} /></span>
            </div>
            <hr className="bg-black"/>
        </li>
        <li>
        <hr className="bg-black"/>
            <div className="timeline-middle">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                {activeIndex >= 1 ? (
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 0.499999C25.3366 0.499999 32.5 7.66344 32.5 16.5C32.5 25.3366 25.3366 32.5 16.5 32.5C7.66344 32.5 0.5 25.3366 0.499999 16.5C0.499999 7.66344 7.66344 0.5 16.5 0.499999ZM16 7.5C20.6693 7.5 24.5 11.5036 24.5 16.5C24.5 21.4964 20.6693 25.5 16 25.5C11.3307 25.5 7.5 21.4964 7.5 16.5C7.5 11.5036 11.3307 7.5 16 7.5ZM25.5 16.5C25.5 11.003 21.2718 6.5 16 6.5C10.7282 6.5 6.5 11.003 6.5 16.5C6.5 21.997 10.7282 26.5 16 26.5C21.2718 26.5 25.5 21.997 25.5 16.5Z" fill="white" stroke="black"/>
                    <ellipse cx="16" cy="16.5" rx="9.5" ry="9" transform="rotate(-90 16 16.5)" fill="black"/>
                    </svg>
                ) : (
                    <circle cx="16.5" cy="16.5" r="16" transform="rotate(-90 16.5 16.5)" fill="white" stroke="black" />
                )}
            </svg>
            </div>
            <div className="timeline-start flex flex-col justify-start items-end lg:pr-10 pr-6 py-4 gap-4">
                <h1 className="anton text-xl lg:text-3xl text-black text-end uppercase tracking-widest">{t('services_process_title_2')}</h1>
                <span className="subtitle_mid text-black text-end">{t('services_process_text_2')}</span>
            </div>
            <div className="timeline-end lg:pl-10 pl-4">
                <img src="/assets/images/servicios/9.jpg" alt="servicios8" className="lg:w-[400px] lg:h-[400px] h-[200px] object-cover" />
            </div>
            <hr className="bg-black"/>
        </li>
        <li>
            <hr className="bg-black"/>
            <div className="timeline-start lg:pr-10 pr-4 py-4">
                <img src="/assets/images/servicios/3.jpg" alt="servicios9" className="lg:w-[400px] lg:h-[400px] h-[200px] object-cover" />
            </div>
            <div className="timeline-middle">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {activeIndex >= 2 ? (
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 0.499999C25.3366 0.499999 32.5 7.66344 32.5 16.5C32.5 25.3366 25.3366 32.5 16.5 32.5C7.66344 32.5 0.5 25.3366 0.499999 16.5C0.499999 7.66344 7.66344 0.5 16.5 0.499999ZM16 7.5C20.6693 7.5 24.5 11.5036 24.5 16.5C24.5 21.4964 20.6693 25.5 16 25.5C11.3307 25.5 7.5 21.4964 7.5 16.5C7.5 11.5036 11.3307 7.5 16 7.5ZM25.5 16.5C25.5 11.003 21.2718 6.5 16 6.5C10.7282 6.5 6.5 11.003 6.5 16.5C6.5 21.997 10.7282 26.5 16 26.5C21.2718 26.5 25.5 21.997 25.5 16.5Z" fill="white" stroke="black"/>
                        <ellipse cx="16" cy="16.5" rx="9.5" ry="9" transform="rotate(-90 16 16.5)" fill="black"/>
                        </svg>
                    ) : (
                        <circle cx="16.5" cy="16.5" r="16" transform="rotate(-90 16.5 16.5)" fill="white" stroke="black" />
                    )}
                </svg>
            </div>
            <div className="timeline-end flex flex-col justify-start items-start lg:pl-10 pl-6 py-4 gap-4">
                <h1 className="anton text-xl lg:text-3xl text-black uppercase tracking-widest">{t('services_process_title_3')}</h1>
                <span className="subtitle_mid text-black text-start">{t('services_process_text_3')}</span>
            </div>
        </li>
        </ul>
    </div>
  )
}

export default Timeline