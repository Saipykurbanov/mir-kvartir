import React from 'react';

const Menu = ({auth, closeMenu, isOpen, openModal}) => {

    return (
        <div className={`menu ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            {auth ?
                <div className='sign_out'>
                    Выйти
                    <svg style={{transform: 'scale(-1, 1)'}} width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path fill-rule="evenodd" clipRule="evenodd" d="M5.45312 1H16.0007V11.5476H5.45312V9.71429H4.45312V11.5476V12.5476H5.45312H16.0007H17.0007V11.5476V1V0H16.0007H5.45312H4.45312V1V2.83333H5.45312V1Z" fill="#FF5500"/>
                        <path d="M12.9524 6.47608L7.95238 3.58932L7.95238 9.36283L12.9524 6.47608ZM-4.37114e-08 6.97607L8.45238 6.97607L8.45238 5.97607L4.37114e-08 5.97607L-4.37114e-08 6.97607Z" fill="#FF5500"/>
                        
                    </svg>
                </div>
                
            :
                <div className='sign' onClick={openModal}>
                    Вход
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path fillRule="evenodd" clipRule="evenodd" d="M5.45312 1H16.0007V11.5476H5.45312V9.71429H4.45312V11.5476V12.5476H5.45312H16.0007H17.0007V11.5476V1V0H16.0007H5.45312H4.45312V1V2.83333H5.45312V1Z" fill="#FF5500"/>
                        <path d="M12.9524 6.47608L7.95238 3.58932L7.95238 9.36283L12.9524 6.47608ZM-4.37114e-08 6.97607L8.45238 6.97607L8.45238 5.97607L4.37114e-08 5.97607L-4.37114e-08 6.97607Z" fill="#FF5500"/>
                        
                    </svg>
                </div>
            }
            <a href="/become_partner" onClick={closeMenu}>Регистрация</a>
            <a href="/#process" onClick={closeMenu}>Как это работает?</a>
            <a href="/#feedback" onClick={closeMenu}>Кейсы</a>
            <a href="/#contacts" onClick={closeMenu}>Наш офис</a>
            <a href="/#footer" onClick={closeMenu}>Контакты</a>
        </div>
    );
};

export default Menu;