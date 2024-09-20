import React from 'react';
import Button from '../button/Button';

import './css/bottom_header.css'

const BottomHeader = ({title}) => {
    return (
        <div className='bottom_header'>
            <a href="/transfer" className="main_button big">Передать Клиента</a>
            {/* <Button mode={'big'} content={'Передать Клиента'}/> */}
            <h2>{title}</h2>
        </div>
    );
};

export default BottomHeader;