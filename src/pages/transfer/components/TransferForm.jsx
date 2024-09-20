import React, { useState } from 'react';
import CheckBox from '../../../frames/registration/components/CheckBox';
import Button from '../../../components/button/Button';

const TransferForm = () => {

    const [transferUser, setTransferUser] = useState({
        group: '',
        name: '',
        tel: '',
        city: '',
        agency: '',
        budget: '',
    })

    return (
        <form action="">
                <div className="check_box_wrapper">
                    <CheckBox labe={'previous'} group={transferUser.group} callback={setTransferUser}>первичный</CheckBox>
                    <CheckBox labe={'secondary'} group={transferUser.group} callback={setTransferUser}>вторичный</CheckBox>
                </div>

                <div className="input_wrapper">
                    <div className="input__item">
                        <input type="text" placeholder='Андрей Пакетов'/>
                        <label htmlFor="">ваше имя</label>
                    </div>

                    <div className="input__item">
                        <input type="text" placeholder='+7 000 000 00 00'/>
                        <label htmlFor="">ваш номер телефона</label>
                    </div>

                    <div className="input__item">
                        <input type="text" placeholder='Санкт-Петербург'/>
                        <label htmlFor="">город</label>
                    </div>

                    <div className="input__item">
                        <input type="text" placeholder='Кукуев без партнеров'/>
                        <label htmlFor="">агенство</label>
                    </div>
                    
                    <div className="input__item">
                        <input type="text" placeholder='от 15 000 000'/>
                        <label htmlFor="">планируемый бюджет</label>
                    </div>
                </div>

                <Button mode={'orange small'} content={'Отправить данные'}/>

            </form>
    );
};

export default TransferForm;