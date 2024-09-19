import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Navigation from './components/Navigation';
import logo from './images/logo.svg';

import './css/header_style.css';
import Store from '../../utils/Store';
import Burger from './components/Burger';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {

    const [theme, setTheme] = useState('')
    const [page, setPage] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const [btn, setBtn] = useState('')

    const openModal = () => {
        document.body.style.overflow = 'hidden';
        Store.setListener('signIn', 'show');
        setIsOpen(false)
        setBtn('burg')
    }

    const changePage = (data) => {
        setPage(data)
        if(data === 9 || data === 6) {
            setTheme('white')
        } else {
            setTheme('')
        }
    }

    Store.useListener('change_page', (data) => changePage(data))

    Store.useListener('change_page_from_scroll', (data) => changePage(data))
    
    
    const toggleMenu = (e) => {
        e.stopPropagation()
        if(isOpen) {
            document.body.style.overflow = 'visible';
            setIsOpen(false)
            setBtn('burg')
        } else {
            document.body.style.overflow = 'hidden';
            setIsOpen(true)
            setBtn('cross')
        }
    }
    
    const closeMenu = () => {
        document.body.style.overflow = 'visible';
        setBtn('burg')
        setIsOpen(false)
    }
    
    useEffect(() => {
        window.addEventListener('click', closeMenu)

        return () => {
            window.removeEventListener('click', closeMenu)
        }
    })
  
    return (
        <header className={theme}>
            <img src={logo} alt="" className="logo" />
            
            <Navigation page={page}/>

            <div className="account">
                <Button mode={theme === 'white' ? 'black' : 'white' } content={'Вход'} callback={openModal}/> 
                {page === 6 ? 
                    <Button mode={'grey'} content={'На главную'} callback={() => {
                        changePage(1)
                        Store.setListener('change_page_header', [0, 1])
                    }}/> 
                    :
                    <Button mode={'orange'} content={'Регистрация'} callback={() => {
                        changePage(6)
                        Store.setListener('change_page_header', [(5 * 100), 6])
                    }}/>
                }
            </div>

            <Burger mode={btn} callback={toggleMenu}/>

            <div className={`menu ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className='sign' onClick={openModal}>
                    Вход
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45312 1H16.0007V11.5476H5.45312V9.71429H4.45312V11.5476V12.5476H5.45312H16.0007H17.0007V11.5476V1V0H16.0007H5.45312H4.45312V1V2.83333H5.45312V1Z" fill="#FF5500"/>
                        <path d="M12.9524 6.47608L7.95238 3.58932L7.95238 9.36283L12.9524 6.47608ZM-4.37114e-08 6.97607L8.45238 6.97607L8.45238 5.97607L4.37114e-08 5.97607L-4.37114e-08 6.97607Z" fill="#FF5500"/>
                        
                    </svg>
                </div>
                <a href="/become_partner" onClick={closeMenu}>Регистрация</a>
                <a href="/#process" onClick={closeMenu}>Как это работает?</a>
                <a href="/#feedback" onClick={closeMenu}>Кейсы</a>
                <a href="/#contacts" onClick={closeMenu}>Наш офис</a>
                <a href="/#footer" onClick={closeMenu}>Контакты</a>
            </div>

        </header>
    );
};

export default Header;