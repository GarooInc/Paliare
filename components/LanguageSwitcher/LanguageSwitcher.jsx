import React, { useState, useEffect } from 'react';

const LanguageSwitcher = ({ onClick }) => {

    return (
        <div className='fixed bottom-0 right-0 p-4'>
            {
                onClick && (
                    <button onClick={onClick} className='bg-black text-white p-2 rounded-full'>EN/ES</button>
                )
            }
        </div>
    )
}

export default LanguageSwitcher;
