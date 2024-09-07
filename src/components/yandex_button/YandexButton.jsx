import React from 'react';
import './css/yandex_button.css';
import yandex from './yandex.svg';

const YandexButton = () => {
    return (
        <button className='yandex_button'>
            <img src={yandex} alt="" />
            5,0
        </button>
    );
};

export default YandexButton;