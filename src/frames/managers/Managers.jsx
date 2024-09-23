import React from 'react';
import BottomHeader from '../../components/bottom_header/BottomHeader';

import './css/managers.css';

import maria from './images/maria.svg'
import maria_qr from './images/maria_qr.svg'
import ruslan from './images/ruslan.svg'
import ruslan_qr from './images/ruslan_qr.svg'

import chat from './../../icons/chat_icon.svg'
import ManagerTitle from './components/ManagerTitle';

const Managers = ({mode}) => {

    const screenWidth = window.innerWidth;

    return (
        <div className={`${mode} managers`}> 

            <div className="manager_content">

                <ManagerTitle>Управляющий по первичному рынку</ManagerTitle>

                <div className="manager_item">

                    <div className="grid">

                        <div className="contacts">
                            <div className="link">
                                <img src={ruslan_qr} alt="" className="qr" />

                                <div className="flex">
                                    <img src={chat} alt="" className="icon" />

                                    <a href="https://www.mirkv.ru/vz/REP0PQ">начать чат</a>
                                </div>
                            </div>

                            <div className="name">Руслан Булякбаев</div>

                            <a href="" className='tel'>+7 911 220 • 02 • 22</a>
                        </div>

                        <div className="manager_image_wrapper">
                            <div className="manager_image">
                                <img src={ruslan} style={{left: '20px'}} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="description">
                        <h3>Руководитель департамента строящейся недвижимости.</h3>
                        <p>12 лет на рынке, помог более, чем 280 клиентам, среди которых политики и бизнесмены, профессоры и академики.</p>
                    </div>

                </div>

                <ManagerTitle>Управляющий по вторичному рынку</ManagerTitle>

                <div className="manager_item">
                    <div className="grid">

                        <div className="contacts">
                            <div className="link">
                                <img src={maria_qr} alt="" className="qr" />

                                <div className="flex">
                                    <img src={chat} alt="" className="icon" />

                                    <a href="https://www.mirkv.ru/vz/7P600P">начать чат</a>
                                </div>
                            </div>

                            <div className="name">Мария Морозова</div>

                            <a href="" className='tel'>+7 911 292 • 74 • 21</a>
                        </div>

                        <div className="manager_image_wrapper">
                            <div className="manager_image">
                                <img src={maria} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="description">
                        <h3>Ведущий брокер департамента по работе с VIP-клиентами. </h3>
                        <p>10 лет на рынке. Мой опыт и знания премиум-сегмента обеспечат вашим клиентам лучший сервис.</p>
                    </div>
                </div>
            </div>

            <BottomHeader title={'наши Управляющие'} link={screenWidth > 992 ? '/transfer' : '/profile#new_client'}/>
        </div>
    );
};

export default Managers;