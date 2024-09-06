import React from 'react';
import Button from '../button/Button';
import Navigation from './components/Navigation';
import logo from './images/logo.svg';

import './css/header_style.css';

const Header = () => {
    
    return (
        <header>
            <img src={logo} alt="" className="logo" />
            
            <Navigation />

            <div className="account">
                <Button mode={'white'} content={'Вход'}/>
                <Button mode={'orange'} content={'Регистрация'}/>
            </div>
        </header>
    );
};

export default Header;