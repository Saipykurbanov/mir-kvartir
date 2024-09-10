import React from 'react';
import './css/objects.css';


import a from './images/n16-large_landscape.jpg'
import b from './images/су-large_portrait.jpg'
import c from './images/номер6-large_portrait.jpg'
import d from './images/n17-large_portrait.jpg'
import e from './images/номер-large_landscape.jpg'
import f from './images/Номер5-large_landscape.jpg'
import g from './images/номер7-large_landscape.jpg'
import h from './images/су3-large_portrait.jpg'


const Objects = ({mode}) => {
    return (
        <div className={mode}>

            <div className="galery">

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

            <dib className="offer">
                <div className="count">907</div>
                <p>Количество квартир для подбора<span>:</span></p>
            </dib>

        </div>
    );
};

export default Objects;