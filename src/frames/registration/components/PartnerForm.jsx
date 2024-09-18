import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import Check from './Check';
import CheckBox from './CheckBox';

const PartnerForm = () => {
    const [newUser, setNewUser] = useState({
        group: '',
        name: '',
        tel: '',
        city: '',
        agency: '',
        telegram: '',
    })

    return (
        <form action="">
            <div className="check_box_wrapper">
                <CheckBox labe={'fiz'} group={newUser.group} callback={setNewUser}>физ. лицо</CheckBox>
                <CheckBox labe={'self_employed'} group={newUser.group} callback={setNewUser}>самозанятый</CheckBox>
                <CheckBox labe={'individual '} group={newUser.group} callback={setNewUser}>ИП</CheckBox>
                <CheckBox labe={'legal'} group={newUser.group} callback={setNewUser}>юр. лицо</CheckBox>
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
                    <input type="text" placeholder='@kukuev'/>
                    <label htmlFor="">ваш ник в Телеграм <span>(мы пригласим Вас в закрытый канал для партнеров)</span></label>
                </div>
            </div>

            <Button mode={'orange small'} content={'Отправить данные'}/>

        </form>
    );
};

export default PartnerForm;