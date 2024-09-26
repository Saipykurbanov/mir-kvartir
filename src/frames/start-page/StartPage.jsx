import React from 'react';
import './css/start-page.css';
import sec from './images/second2.svg';


const StartPage = ({mode}) => {
    
    return (
        <div className={`start_page page main`}>

            <div className="about_us_block">

                <div className="description_block">
                    <div className="description">
                        <span>Мы помогаем решать задачи ваших</span>
                        <span>клиентов на рынке недвижимости</span>
                        <span>Санкт-Петербурга. Лидерские</span>
                        <span>позиции в премиальном сегменте</span>
                        <span>вторичного рынка, а также полный</span>
                        <span>доступ ко всем новостройкам города.</span>
                    </div>

                    <div className="partners">Уже более 1700 партнеров по России.</div>

                </div>

                <div className="offer">
                    Помогаем продавать объекты <span style={{whiteSpace: 'nowrap'}}>с высоким</span> чеком
                </div>
            </div>

            <div className="clicks">

                <div className="comission">
                    Получайте <br/> комиссию в
                </div>

                <div className="second">
                    <img src={sec} alt="" />
                </div>

            </div>
        </div>
    );
};

export default StartPage;