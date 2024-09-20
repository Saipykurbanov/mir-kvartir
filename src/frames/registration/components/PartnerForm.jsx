import React from 'react';
import Button from '../../../components/button/Button';
import CheckBox from './CheckBox';
import useNewUser from '../hooks/useNewUser';

const PartnerForm = () => {

    const {newUser, setNewUser, sendData} = useNewUser()

    return (
        <form action="" onSubmit={(e) => sendData(e)}>
            <div className="check_box_wrapper">
                <CheckBox labe={'fiz'} group={newUser.group} callback={setNewUser}>физ. лицо</CheckBox>
                <CheckBox labe={'self_employed'} group={newUser.group} callback={setNewUser}>самозанятый</CheckBox>
                <CheckBox labe={'individual '} group={newUser.group} callback={setNewUser}>ИП</CheckBox>
                <CheckBox labe={'legal'} group={newUser.group} callback={setNewUser}>юр. лицо</CheckBox>
            </div>

            <div className="input_wrapper">
                <div className="input__item">
                    <input type="text" />
                    <label htmlFor="">ваше имя</label>
                </div>

                <div className="input__item">
                    <input type="text" />
                    <label htmlFor="">ваш номер телефона</label>
                </div>

                <div className="input__item">
                    <input type="text" />
                    <label htmlFor="">город</label>
                </div>

                <div className="input__item">
                    <input type="text" />
                    <label htmlFor="">агенство</label>
                </div>
                
                <div className="input__item">
                    <input type="text"/>
                    <label htmlFor="">ваш ник в Телеграм <span>(мы пригласим Вас в закрытый канал для партнеров)</span></label>
                </div>
            </div>

            <Button mode={'orange small'} content={'Отправить данные'}/>

        </form>
    );
};

export default PartnerForm;