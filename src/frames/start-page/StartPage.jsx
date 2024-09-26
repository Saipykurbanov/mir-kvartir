import React from 'react';
import './css/start-page.css';
import sec from './images/second2.svg';


const StartPage = ({mode}) => {
    return (
        <div className={`start_page page main`}>

            <div className="about_us_block">

                <div className="description_block">
                    <div className="description">
                        Мы помогаем решать задачи ваших клиентов на рынке недвижимости Санкт-Петербурга. Лидерские позиции <span style={{whiteSpace: 'nowrap'}}>в премиальном</span> сегменте вторичного рынка, а также полный доступ ко всем новостройкам города.
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