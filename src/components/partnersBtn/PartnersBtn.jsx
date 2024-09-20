import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/partners_btn.css';


const PartnersBtn = ({auth}) => {

    return (
        <NavLink to={auth ? '/profile#new_client' : '/become_partner'} className={`partners_btn ${auth ? 'auth' : 'unauth'}`}>
            {auth ? 'ПЕРЕДАТЬ КЛИЕНТА' : 'СТАТЬ ПАРТНЕРОМ'}
        </NavLink>
    );
};

export default PartnersBtn;