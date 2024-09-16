import React from 'react';
import Button from '../../../components/button/Button';

const NewCLients = () => {

    return (
        <div className="new_clients">
            <div className="title_profile">передать нового клиента:</div>
            <form action="">
                <div className="check_block">

                    <div className="checkbox_input">
                        <div type="checkbox" className='checkbox' id='checkbox1' >
                            <div className="fill"></div>
                        </div>
                        <div className='label'>Первичный рынок</div>
                    </div>

                    <div className="checkbox_input">
                        <div type="checkbox" className='checkbox' id='checkbox2' >
                            <div className="fill"></div>
                        </div>
                        <div className='label'>вторичный рынок</div>
                    </div>
                    
                </div>

                <div className="input_block">
                    <div className='main_input'>
                        <input type="password"  />
                        <div className="label">Имя клиента</div>
                    </div>
                    <div className='main_input'>
                        <input type="password"  />
                        <div className="label">Номер телефона клиента</div>
                    </div>
                    <div className='main_input'>
                        <input type="password"  />
                        <div className="label">Город</div>
                    </div>
                    <div className='main_input'>
                        <input type="password"  />
                        <div className="label">планируемый бюджет</div>
                    </div>
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