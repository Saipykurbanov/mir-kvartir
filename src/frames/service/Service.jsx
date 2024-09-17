import React from 'react';
import './css/service.css';
import pic1 from './images/pict01.svg'
import pic2 from './images/pict02.svg'
import pic3 from './images/pict03.svg'
import pic4 from './images/pict04.svg'

const Service = ({mode}) => {
    return (
        <div className={mode}>
            <div className="premium">

                <div className="year">
                    <div className="a">20</div>
                    <div className="b">лет</div>
                </div>

                <div className="c">обслуживаем требовательных клиентов в сегменте бизнес и премиум</div>
            </div>

            <div className="service_description">
                <div className="service_description_item">
                    <img src={pic1} alt="" />
                    <div className="service_description_info">
                        <h4 >Берем на себя</h4>
                        <p>Доля вашей работы не более 10% от всего процесса.</p>
                    </div>
                </div>

                <div className="service_description_item">
                    <img src={pic2} alt="" />
                    <div className="service_description_info">
                        <h4>Платим Всегда</h4>
                        <p>Передайте клиента 1 раз и получайте комиссию за все его сделки.</p>
                    </div>
                </div>

                <div className="service_description_item">
                    <img src={pic3} alt="" />
                    <div className="service_description_info">
                        <h4 >Одобряем всех</h4>
                        <p>Одобряем ипотеку даже самым сложным клиентам.</p>
                    </div>
                </div>

                <div className="service_description_item">
                    <img src={pic4} alt="" />
                    <div className="service_description_info">
                        <h4 >Работаем прозрачно</h4>
                        <p>Отслеживайте процесс работы через наш удобный CRM.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;