import React from 'react';

import arrow_left from './../icons/arrow_left.svg'

const BackButton = () => {
    return (
        <a href='/' className='back_button'>
            <img src={arrow_left} alt="" />

            <h2>Стать партнером</h2>
        </a>
    );
};

export default BackButton;