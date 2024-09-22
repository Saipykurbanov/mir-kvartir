import React from 'react';
import './css/about.css';


const About = ({ mode }) => {

    return (
        <div className={mode}>

            <div className="market_block">
                <div className="images">

                    <div className="image">
                        <img src={'/images/about/sec.png'} alt="" />
                        <p className='sec'>Только центральные районы Петербурга</p>
                    </div>

                    <div className="image first">
                        <img src={'/images/about/first.svg'} alt="" />
                        <p className='first'>Больше, чем <br/> «под ключ»</p>
                    </div>

                </div>

                <div className="description">

                    <div className="market_list">
                        <div className='market_wrapper'>
                            <h4>Первичный Рынок</h4>
                            <ul>
                                <li>подберем лучшие варианты от застройщика</li>
                                <li>согласуем индивидуальные скидки для вашего клиента</li>
                                <li>бронируем до старта продаж по минимальной цене</li>
                                <li>сопровождаем сделку, от брони до выплаты комиссионных</li>
                            </ul>
                        </div>

                        <div className="image_mob">
                            <img src={'/images/about/first.svg'} alt="" />
                            <p className='first'>Больше, чем <br/> «под ключ»</p>
                        </div>
                    </div>

                    <div className="market_list">
                        <div className='market_wrapper'>
                            <h4>Вторичный рынок</h4>
                            <ul>
                                <li>подберем безопасный объект для покупателя</li>
                                <li>тщательно проверим продавца</li>
                                <li>предложим пул квартир из закрытой продажи</li>
                                <li>самый широкий выбор объектов на эксклюзиве  в сегментах "бизнес" и "премиум"</li>
                            </ul>
                        </div>

                        <div className="image_mob sec">
                            <img src={'/images/about/sec.png'} alt="" />
                            <p className='sec'>Только центральные районы Петербурга</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="ofer">Обеспечиваем поддержку <br/> на вторичном и первичном рынках</div>
            
        </div>
    );
};

export default About;