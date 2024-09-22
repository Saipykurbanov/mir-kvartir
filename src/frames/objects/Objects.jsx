import React from 'react';
import './css/objects.css';

import Button from '../../components/button/Button';


const Objects = ({mode}) => {
    return (
        <div className={mode}>

            <Button mode={'orange full mob'} content={'Посмотреть все объекты'}/>

            <div className="galery">

                <div className="galery_image l">
                    <img src={'/images/header/logo.svg'} alt="" />
                </div>

                <div className="galery_image a">
                    <img src={'/images/objects/n16-large_landscape.jpg'} alt="" />
                </div>
                <div className="galery_image b">
                    <img src={'/images/objects/su-large_portrait.jpg'} alt="" />
                </div>
                <div className="galery_image c">
                    <img src={'/images/objects/n17-large_portrait.jpg'} alt="" />
                </div>
                <div className="galery_image d">
                    <img src={'/images/objects/n17-large_portrait.jpg'} alt="" />
                </div>
                <div className="galery_image e">
                    <img src={'/images/objects/nomer-large_landscape.jpg'} alt="" />
                </div>
                <div className="galery_image f">
                    <img src={'/images/objects/nomer5-large_landscape.jpg'} alt="" />
                </div>
                <div className="galery_image g">
                    <img src={'/images/objects/nomer7-large_landscape.jpg'} alt="" />
                </div>
                <div className="galery_image h">
                    <img src={'/images/objects/su3-large_portrait.jpg'} alt="" />
                </div>

            </div>

            <div className="offer">
                <div className="count">907</div>
                <p>Количество квартир для подбора<span>:</span></p>
            </div>

        </div>
    );
};

export default Objects;