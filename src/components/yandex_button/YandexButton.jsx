import React from 'react';
import './css/yandex_button.css';
import yandex from './yandex.svg';

const YandexButton = () => {
    return (
        <a href="https://yandex.ru/maps/-/CDD-n6L2" className='yandex_button' target='_blank' >
            <img src={yandex} alt="" />
            5,0
        </a>
    );
};

export default YandexButton;