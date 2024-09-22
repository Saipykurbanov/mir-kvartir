import React from 'react';
import './css/process.css'
import Button from '../../components/button/Button';


const Process = ({mode}) => {
    return (
        <div className={mode} id='process'>

            <div className="process_header">Как это работает?</div>

            <div className="instruction">
                <div className="instruction_item">
                    <div className="number">1</div>

                    <div className={`nav_item`}>
                        <div className="pagination">

                            <div className="inner_circle"></div>
                            
                            <img src={'/images/header/decor2.svg'} alt="" className="decor right" />
                        </div>

                        <span className="line top"></span>
                    </div>

                    <div className='description'>
                        <p>Передайте данные клиента через форму на этом сайте.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">2</div>

                    <div className={`nav_item`}>
                        <div className="pagination">
                            <img src={'/images/header/decor2.svg'} alt="" className="decor left" />

                            <div className="inner_circle"></div>
                            
                            <img src={'/images/header/decor2.svg'} alt="" className="decor right" />

                        </div>
                        <span className="line center"></span>
                    </div>
                    
                    <div className='description'>
                        <p>Наш брокер свяжется с вами для обсуждения задачи.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">3</div>
                    <div className={`nav_item`}>
                        <div className="pagination">
                            <img src={'/images/header/decor2.svg'} alt="" className="decor left" />

                            <div className="inner_circle"></div>
                            
                            <img src={'/images/header/decor2.svg'} alt="" className="decor right" />
                        </div>
                        <span className="line center"></span>
                    </div>
                    <div className='description'>
                        <p>Брокер связывается с клиентом, определяет ситуацию и готовит план действий.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">4</div>
                    <div className={`nav_item`}>
                        <div className="pagination">
                            <img src={'/images/header/decor2.svg'} alt="" className="decor left" />

                            <div className="inner_circle"></div>
                            
                            <img src={'/images/header/decor2.svg'} alt="" className="decor right" />
                        </div>
                        <span className="line center"></span>
                    </div>
                    <div className='description'>
                        <p>берем на себя работу, от А до Я. Клиенту не обязательно быть в СПб</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">5</div>
                    <div className={`nav_item`}>
                        <div className="pagination">
                            <img src={'/images/header/decor2.svg'} alt="" className="decor left" />

                            <div className="inner_circle"></div>
                            
                            <img src={'/images/header/decor2.svg'} alt="" className="decor right" />
                        </div>
                        <span className="line center"></span>
                    </div>
                    <div className='description'>
                        <p>Проводим идеальную сделку — клиент счастлив.</p>
                    </div>
                </div>

                <div className="instruction_item">
                    <div className="number">6</div>
                    <div className={`nav_item`}>
                        <div className="pagination">
                            <img src={'/images/header/decor2.svg'} alt="" className="decor left" />

                            <div className="inner_circle"></div>
                        </div>
                        <span className="line bottom"></span>
                    </div>
                    <div className='description'>
                        <p>Вы получаете свою долю комиссии.</p>
                    </div>
                </div>
            </div>

            <div className="description_block">

                <div className="offer">
                    <Button mode={'big'} content={'Стать Партнером'} />
                    <div className="quation">Как это работает?</div>
                </div>
                
                <div className="premium">

                    <div className="year">
                        <div className="a">20</div>
                        <div className="b">лет</div>
                    </div>

                    <div className="c">обслуживаем требовательных клиентов в сегменте бизнес и премиум</div>
                </div>
            </div>

        </div>
    );
};

export default Process;