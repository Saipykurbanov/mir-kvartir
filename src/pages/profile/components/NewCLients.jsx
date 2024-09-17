import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import useNewClients from '../hooks/useNewClients';

const NewCLients = () => {

    const newCLients = useNewClients()

    return (
        <div className="new_clients">
            <div className="title_profile">передать клиента:</div>
            <form action="">
                <div className="check_block">

                    <div className="checkbox_input" onClick={() => newCLients.changeBox('first')}>
                        <div type="checkbox" className='checkbox' id='checkbox1' >
                            <div className={`fill ${newCLients.newUser.first ? 'active' : ''}`} ></div>
                        </div>
                        <div className='label'>Первичный рынок</div>
                    </div>

                    <div className="checkbox_input" onClick={() => newCLients.changeBox('second')}>
                        <div type="checkbox" className='checkbox' id='checkbox2'>
                            <div className={`fill ${newCLients.newUser.second ? 'active' : ''}`}></div>
                        </div>
                        <div className='label'>Вторичный рынок</div>
                    </div>
                    
                </div>

                <div className="input_block">
                    <div className='main_input'>
                        <input type="text"  />
                        <div className="label">Имя клиента</div>
                    </div>
                    <div className='main_input'>
                        <input type="text"  />
                        <div className="label">Номер телефона клиента</div>
                    </div>
                    <div className='main_input'>
                        <input type="text"  />
                        <div className="label">Город</div>
                    </div>
                    <div className='main_input'>
                        <input type="text"  />
                        <div className="label">планируемый бюджет</div>
                    </div>

                    <div className="mobile_offer">*начнем работать с клиентом только после того, как свяжемся с Вами.</div>
                    <Button content={'Отправить данные'} mode={'small  min-content'}/>
                </div>

                <div className="comment">
                    <div className="textarea">
                        <textarea name="" id="" placeholder='ваш коментарий'></textarea>
                    </div>
                    
                    <div className="transfer">
                        <p>Нажимая кнопку «передать», вы подтверждаете, что ознакомились с <a href="">политикой в отношении обработки персональных данных</a> и даете <a href="">согласие</a> на обра-ботку персональных данных</p>
                        <Button content={'Передать'} mode={'small'}/>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default NewCLients;