import React from 'react';
import './css/objects.css';


import a from './images/n16-large_landscape.jpg';
import b from './images/su-large_portrait.jpg';
import c from './images/nomer6-large_portrait.jpg';
import d from './images/n17-large_portrait.jpg';
import e from './images/nomer-large_landscape.jpg';
import f from './images/nomer5-large_landscape.jpg';
import g from './images/nomer7-large_landscape.jpg';
import h from './images/su3-large_portrait.jpg';
import logo from './../../components/header/images/logo.svg';
import Button from '../../components/button/Button';


const Objects = ({mode}) => {
    return (
        <div className={mode}>

            <Button mode={'orange full mob'} content={'Посмотреть все объекты'}/>

            <div className="galery">

                <div className="galery_image l">
                    <img src={logo} alt="" />
                </div>

                <div className="galery_image a">
                    <img src={a} alt="" />
                </div>
                <div className="galery_image b">
                    <img src={b} alt="" />
                </div>
                <div className="galery_image c">
                    <img src={c} alt="" />
                </div>
                <div className="galery_image d">
                    <img src={d} alt="" />
                </div>
                <div className="galery_image e">
                    <img src={e} alt="" />
                </div>
                <div className="galery_image f">
                    <img src={f} alt="" />
                </div>
                <div className="galery_image g">
                    <img src={g} alt="" />
                </div>
                <div className="galery_image h">
                    <img src={h} alt="" />
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