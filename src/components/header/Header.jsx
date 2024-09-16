import React, { useState } from 'react';
import Button from '../button/Button';
import Navigation from './components/Navigation';
import logo from './images/logo.svg';

import './css/header_style.css';
import Store from '../../utils/Store';

const Header = () => {

    const openModal = () => {
        document.body.style.overflow = 'hidden';
        Store.setListener('signIn', 'show');
    }

    const [theme, setTheme] = useState('')
    const [page, setPage] = useState(1)

    const changePage = (data) => {
        setPage(data)
        if(data === 10 || data === 6) {
            setTheme('white')
        } else {
            setTheme('')
        }
    }

    Store.useListener('change_page', (data) => changePage(data))

    Store.useListener('change_page_from_scroll', (data) => changePage(data))
    
  
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

        </header>
    );
};

export default Header;