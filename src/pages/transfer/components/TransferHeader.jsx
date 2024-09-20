import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/button/Button';
import logo from './../../../components/header/images/logo.svg'

const TransferHeader = () => {
    return (
        <div className='profile_header'>
            <img src={logo} alt="" className="logo" />
            
            <NavLink to={'/'}><Button mode={'grey'} content={'На главную'}/></NavLink>
        </div>
    );
};

export default TransferHeader;