import React from 'react';
import './css/process.css'


const Process = ({mode}) => {
    return (
        <div className={mode}>

            <div className="process_header">Как это работает?</div>

            <div className="instruction">
                <div className="instruction_item">
                    <div className="number">1</div>
                    <div className='description'>
                        <p>Передайте данные клиента через форму на этом сайте.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">2</div>
                    <div className='description'>
                        <p>Наш брокер свяжется с вами для обсуждения задачи.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">3</div>
                    <div className='description'>
                        <p>Брокер связывается с клиентом, определяет ситуацию и готовит план действий.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">4</div>
                    <div className='description'>
                        <p>Готовим сделку —  все этапы берем на себя от А до Я. Клиенту не обязательно быть в Петербурге.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">5</div>
                    <div className='description'>
                        <p>Проводим идеальную сделку — клиент счастлив.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">6</div>
                    <div className='description'>
                        <p>Вы получаете свою долю комиссии.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;