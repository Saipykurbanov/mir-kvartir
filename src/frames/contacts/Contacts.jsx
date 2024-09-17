import React from 'react';
import SLider from './components/SLider';
import Map from './components/Map';
import './css/contacts.css'

import telegram from './images/telegram.svg'
import you_tube from './images/you_tube.svg'
import vk from './images/vk.svg'
import whats_app from './images/WhatsApp.svg'
import telegram_white from './images/telegram_white.svg'
import you_tube_white from './images/you_tube_white.svg'
import vk_white from './images/vk_white.svg'
import whats_ap_white from './images/whats_ap_white.svg'

const Contacts = ({mode}) => {
    return (
        <div className={`${mode} contacts`} id='contacts'>

            <div className="contacts_content">

                <h2>наш офис</h2>

                <SLider />

                <h3>ул. Рубинштейна, 13</h3>

                <Map />

            </div>


            <footer id='footer'>

                <h2>Контакты</h2>

                <div className="social">
                    <a href="">
                        <img src={telegram} alt="" className='desc' />
                        <img src={telegram_white} alt="" className="mob" />
                        telegram
                    </a>
                    <a href="">
                        <img src={vk} alt="" className='desc' />
                        <img src={vk_white} alt="" className="mob" />
                        VK
                    </a>
                    <a href="">
                        <img src={whats_app} alt="" className='desc' />
                        <img src={whats_ap_white} alt="" className="mob" />
                        WhatsApp
                    </a>
                    <a href="">
                        <img src={you_tube} alt="" className='desc' />
                        <img src={you_tube_white} alt="" className="mob" />
                        YouTube
                    </a>
                </div>

                <div className="mob_contacts">
                    <a href="tel:+78123807330" className="mob_tel">+7 812 380 • 73 • 30</a>
                    <a href="mail:info@mirkv.ru" className="mob_mail">info@mirkv.ru</a>

                    <div className="copyright">© Мир квартир Спб 2005-2024,все права защищены Юридическое имя: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МИР КВАРТИР СПБ» Адрес: УЛ. РУБИНШТЕЙНА, Д. 8, ЛИТЕР А, ПОМ. 15-Н ОФ. 3, Г.САНКТ-ПЕТЕРБУРГ, 191025, Россия</div>
                </div>

            </footer>

        </div>
    );
};

export default Contacts;