import React from 'react';
import logo from './../../../components/header/images/logo.svg'
import User from './User';
import Button from '../../../components/button/Button';
import { NavLink } from 'react-router-dom';

const ProfileHeader = () => {
    return (
        <div className='profile_header'>
            <img src={logo} alt="" className="logo" />
            <User />
            <NavLink to={'/'}><Button mode={'grey'} content={'На главную'}/></NavLink>
        </div>
    );
};

export default ProfileHeader;