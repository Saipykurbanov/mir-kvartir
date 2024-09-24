import React from 'react';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";

import './css/bottom_header.css'
import Store from '../../utils/Store';

const BottomHeader = ({title, link}) => {
    const auth = true
    const navigate = useNavigate()

    const checkForAuth = () => {
        if(auth) {
            navigate(link)
        } else {
            document.body.style.overflow = 'hidden';
            Store.setListener('signIn', 'show');
            Store.setListener('block_scroll', true);
        }
    }

    return (
        <div className='bottom_header'>
            <Button mode={'big'} content={'Передать Клиента'} callback={checkForAuth}/>
            <h2>{title}</h2>
        </div>
    );
};

export default BottomHeader;