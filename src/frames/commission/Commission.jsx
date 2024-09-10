import React from 'react';
import BottomHeader from '../../components/bottom_header/BottomHeader';

import './css/commission.css';

import percent from './images/30.svg'

const Commission = ({mode}) => {
    return (
        <div className={`commission ${mode}`}>

            <div className="comission_content">
                <div className="about_commission">
                    <div className="about__item">
                        <h3>Общая комиссия</h3>
                        <p> <span>3-6%</span> от стоимости квартиры в Санкт-Петербурге</p>
                    </div>

                    <div className="about__item">
                        <h3>Ваше Вознаграждение</h3>
                        <p><span>до 30%</span> за результативную передачу клиента по новостройкам</p>
                    </div>
                </div>

                
                <BottomHeader title={'Комиссия'}/>  
            </div>

            <div className="percent_block">
                <img src={percent} alt="" className="percent" />
            </div>


        </div>
    );
};

export default Commission;