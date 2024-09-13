import React from 'react';
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

    return (
        <header>
            <img src={logo} alt="" className="logo" />
            
            <Navigation />

            <div className="account">
                <Button mode={'white'} content={'Вход'} callback={openModal}/>
                <Button mode={'orange'} content={'Регистрация'}/>
            </div>
        </header>
    );
};

export default Header;