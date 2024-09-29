import React, { useCallback, useEffect, useState } from 'react';
import Button from '../button/Button';
import Navigation from './components/Navigation';

import './css/header_style.css';
import Store from '../../utils/Store';
import Burger from './components/Burger';
import Menu from './components/Menu';
import Account from './components/Account';


const Header = () => {

    const [theme, setTheme] = useState('')
    const [page, setPage] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const [btn, setBtn] = useState('')

    Store.useListener('theme', (data) => {
        setPage(data)
        if(data === 9 || data === 6) {
            setTheme('white')
        } else {
            setTheme('')
        }
    })

    const openModal = () => {
        document.body.style.overflow = 'hidden';
        Store.setListener('signIn', 'show');
        Store.setListener('block_scroll', true);
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
        setBtn(prev => prev === 'burg' || prev === '' ? prev : 'burg')
        setIsOpen(false)
    }
    
    useEffect(() => {
        window.addEventListener('click', closeMenu)

        return () => {
            window.removeEventListener('click', closeMenu)
        }
    }, [])
  
    return (
        <header>

            <img src='/images/header/logo.svg' alt="" className="logo" />
            
            <Navigation page={page}/>

            <Account openModal={openModal} changePage={changePage} page={page}/>

            <Burger mode={btn} callback={toggleMenu}/>

            <Menu auth={false} closeMenu={closeMenu} isOpen={isOpen} openModal={openModal}/>

        </header>
    );
};

export default Header;