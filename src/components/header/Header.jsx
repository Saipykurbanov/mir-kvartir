import React from 'react';
import Button from '../button/Button';

import logo from './images/logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className="logo" />
            <nav></nav>
            <div className="account">
                <Button mode={'white'} content={'Вход'}/>
                <Button mode={'orange'} content={'Регистрация'}/>
            </div>
        </header>
    );
};

export default Header;