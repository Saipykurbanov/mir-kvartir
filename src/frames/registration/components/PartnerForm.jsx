import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import Check from './Check';

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
                <div className="check_box">
                    <Check labe={'fiz'} group={newUser.group} setNewUser={setNewUser}/>
                    <label htmlFor="" className="check__label">физ. лицо</label>
                </div>

                <div className="check_box">
                    <Check labe={'self_employed'} group={newUser.group} setNewUser={setNewUser}/>
                    <label htmlFor="" className="check__label">самозанятый</label>
                </div>

                <div className="check_box">
                    <Check labe={'individual '} group={newUser.group} setNewUser={setNewUser}/>
                    <label htmlFor="" className="check__label">ИП</label>
                </div>

                <div className="check_box">
                    <Check labe={'legal'} group={newUser.group} setNewUser={setNewUser}/>
                    <label htmlFor="" className="check__label">юр. лицо</label>
                </div>
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