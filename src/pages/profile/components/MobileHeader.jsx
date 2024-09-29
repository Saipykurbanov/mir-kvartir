import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileHeader = () => {
    return (
        <NavLink to={'/'} className='mobile_header' >

            <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 24L3 13L11 2" stroke="white" strokeWidth="4"/>
            </svg>

            Личный кабинет
        </NavLink>
    );
};

export default MobileHeader;