import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/partners_btn.css';


const PartnersBtn = ({auth}) => {

    return (
        <Link to={auth ? '/profile#new_client' : '/become_partner'} className={`partners_btn ${auth ? 'auth' : 'unauth'}`}>
            {auth ? 'ПЕРЕДАТЬ КЛИЕНТА' : 'СТАТЬ ПАРТНЕРОМ'}
        </Link>
    );
};

export default PartnersBtn;